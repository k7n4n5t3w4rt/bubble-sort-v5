// @flow
// Debug logging is added around each test execution and is gated by the
// environment variable TESTY_DEBUG. Logs are emitted to stderr so they do not
// interfere with TAP output consumed by faucet. Functionality remains
// identical when TESTY_DEBUG is not set to "1".
import glob from "glob";
import { exec } from "child_process";

let counter = 0;

const cleanInt = (getVar) => Math.abs(Math.floor(parseFloat(getVar)) || 0);

const experimentalWarningFilter = (currentElement) =>
  currentElement.indexOf(
    "ExperimentalWarning: The ESM module loader is experimental",
  ) === -1 && currentElement !== "";

const processExecMessages = (resolve) => (e, stdout, stderr) => {
  if (e) {
    ++counter;
    resolve([`${e.message}...${stderr}`]);
    return;
  }
  let messageString = stdout.trim();
  if (stderr) {
    const notOks = stderr.split(/\r?\n/) || [];
    const trimmedNotOks = notOks.map((currentElement) => currentElement.trim());
    // filter out Node ESM experimental warnings
    const filtered = trimmedNotOks.filter(experimentalWarningFilter);
    if (filtered.length) {
      messageString += " - " + filtered.join(" ~ ");
    }
  }
  const messages = messageString.split(/\r?\n/).filter((s) => s !== "") || [];
  resolve(messages);
};

const execFactory = async (e, testies) => {
  // Sort the test files to ensure a consistent execution order.
  testies.sort();

  // Determine whether to emit debug logs.
  const isDebug /*: boolean */ = process.env.TESTY_DEBUG === "1";

  let faucetMessages = [];
  for (const testy of testies) {
    // Start debug: log the test file and timestamp. Emit to stderr to avoid
    // contaminating stdout TAP output.
    if (isDebug) {
      // Include ISO timestamp for easier correlation.
      // Flow type hint for clarity: `testy` is a string path.
      // eslint-disable-next-line no-console
      console.error(
        `[testy] RUN start: ${testy} at ${new Date().toISOString()}`,
      );
    }

    const startNs /*: bigint */ = process.hrtime.bigint();
    const execPromise = new Promise((resolve) => {
      exec(`node ${testy}`, processExecMessages(resolve));
    });
    const messages = await execPromise;
    const endNs /*: bigint */ = process.hrtime.bigint();
    const elapsedMs /*: number */ = Number(endNs - startNs) / 1e6;

    // End debug: log duration for the test file.
    if (isDebug) {
      // eslint-disable-next-line no-console
      console.error(`[testy] RUN end: ${testy} in ${elapsedMs.toFixed(1)} ms`);
    }
    faucetMessages = [...faucetMessages, ...messages];
  }

  // Only emit valid TAP result lines for faucet (filter out console logs)
  const tapLines = faucetMessages.filter(
    (line) => line.startsWith("ok - ") || line.startsWith("not ok - "),
  );

  // Log this out for the faucet reporter
  console.log(`1..${tapLines.length}`);
  tapLines
    .sort((a, b) => {
      // faucet needs the messages to be sorted by test number
      const aNum = cleanInt(a.split(" ")[1]);
      const bNum = cleanInt(b.split(" ")[1]);
      if (aNum < bNum) return -1;
      if (aNum > bNum) return 1;
      return 0;
    })
    .forEach((message) => {
      // Log this out for the faucet reporter
      console.log(message);
    });
};

glob(
  "**/*.testy.js",
  {
    // Avoid scanning huge folders (and prevent permission issues in some environments)
    ignore: [
      "**/node_modules/**",
      "**/docs/**",
      "**/dist/**",
      "**/web_modules/**",
    ],
  },
  execFactory,
);
