/**
 * Set the idle opacity for the AR control button.
 *
 * When the button is in STOP AR state we want it to be
 * barely visible when not hovered, while remaining more
 * prominent in START AR state.
 *
 * @param {HTMLButtonElement} button - The AR control button element.
 * @param {boolean} isStopState - True when the button represents STOP AR.
 * @returns {void}
 */
const setIdleOpacity = (button, isStopState) => {
  // STOP AR should be barely visible when idle; START AR keeps the
  // previous slightly transparent appearance to remain discoverable.
  // 0.1 is low enough to be subtle but still visible on most backgrounds.
  button.style.opacity = isStopState ? "0.1" : "0.5";
};

/**
 * @param {string} locationString
 * @param {any} renderer
 * @param {any} [sessionInit]
 * @param {{ onSessionStarted?: ((session: any) => (void | Promise<void>)) }} [hooks]
 * @returns {void | HTMLAnchorElement | HTMLButtonElement}
 */
const createButton = (
  locationString,
  renderer,
  sessionInit = {},
  { onSessionStarted: onSessionStartedHook = undefined } = {},
) => {
  const existingButton = document.getElementById("ARButton");
  if (existingButton !== null) {
    existingButton.remove();
  }
  let currentSession = null;

  // Tracks whether the AR button is currently in STOP AR state so we can
  // adjust the idle opacity without affecting the START AR experience.
  let isStopState = false;

  const button = document.createElement("button");

  function showStartAR(/*device*/) {
    async function onSessionStarted(session) {
      session.addEventListener("end", onSessionEnded);

      if ("xr" in navigator) {
        renderer.xr.setReferenceSpaceType("local");

        await renderer.xr.setSession(session);

        if (typeof onSessionStartedHook === "function") {
          try {
            await onSessionStartedHook(session);
          } catch {
            // Ignore hook errors so AR start still works.
          }
        }

        button.textContent = "STOP AR";
        button.style.display = "";

        // When the AR session is active, mark the button as STOP AR and
        // reduce its idle opacity so it is only barely visible when not
        // hovered or focused.
        isStopState = true;
        setIdleOpacity(button, isStopState);

        currentSession = session;
      }
    }

    function onSessionEnded(/*event*/) {
      if (currentSession !== null) {
        currentSession.removeEventListener("end", onSessionEnded);
        // button.textContent = "START AR";
        // currentSession = null;
        window.location.assign(locationString);
      }
    }

    button.style.display = "";
    button.style.cursor = "pointer";
    button.style.left = "calc(50% - 50px)";
    button.style.width = "100px";
    button.textContent = "START AR";

    // Ensure we start in START AR state with the historical idle opacity.
    isStopState = false;
    setIdleOpacity(button, isStopState);

    button.onmouseenter = function () {
      button.style.opacity = "1.0";
    };

    button.onmouseleave = function () {
      // On mouse leave, restore the appropriate idle opacity based on
      // whether the button currently represents START AR or STOP AR.
      setIdleOpacity(button, isStopState);
    };

    button.onclick = function () {
      if (currentSession === null) {
        if ("xr" in navigator) {
          // $FlowFixMe
          navigator.xr
            .requestSession("immersive-ar", sessionInit)
            .then(onSessionStarted);
        }
      } else {
        currentSession.end();
      }
    };
  }

  function disableButton() {
    button.style.display = "";

    button.style.cursor = "auto";
    button.style.left = "calc(50% - 75px)";
    button.style.width = "150px";

    button.onmouseenter = null;
    button.onmouseleave = null;

    button.onclick = null;
  }

  function showARNotSupported() {
    disableButton();

    button.textContent = "AR NOT SUPPORTED";
  }

  function stylizeElement(element) {
    element.style.position = "absolute";
    element.style.bottom = "20px";
    element.style.padding = "12px 6px";
    element.style.border = "1px solid #fff";
    element.style.borderRadius = "4px";
    element.style.background = "rgba(0,0,0,0.1)";
    element.style.color = "#fff";
    element.style.font = "normal 13px sans-serif";
    element.style.textAlign = "center";
    element.style.opacity = "0.5";
    element.style.outline = "none";
    element.style.zIndex = "10000";
  }

  if ("xr" in navigator) {
    button.id = "ARButton";
    button.style.display = "none";

    stylizeElement(button);

    // Default to the START AR idle opacity before we know the state.
    setIdleOpacity(button, isStopState);

    // $FlowFixMe
    navigator.xr
      .isSessionSupported("immersive-ar")
      .then(function (supported) {
        supported ? showStartAR() : showARNotSupported();
      })
      .catch(showARNotSupported);

    return button;
  } else {
    const message = document.createElement("a");

    if (window.isSecureContext === false) {
      message.href = document.location.href.replace(/^http:/, "https:");
      message.innerHTML = "WEBXR NEEDS HTTPS"; // TODO Improve message
    } else {
      message.href = "https://immersiveweb.dev/";
      message.innerHTML = "WEBXR NOT AVAILABLE";
    }

    message.style.left = "calc(50% - 90px)";
    message.style.width = "180px";
    message.style.textDecoration = "none";

    stylizeElement(message);

    return message;
  }
};

export default { createButton };
