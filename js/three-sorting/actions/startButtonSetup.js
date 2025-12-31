import ARButton from "./ARButton.js";

const removeIfExists = (id) => {
  const el = document.getElementById(id);
  if (el) el.remove();
};

/**
 * @type {(
 *   renderer: any,
 *   onStart3D: any,
 *   onStartAR: any,
 *   options?: { locationString?: string, displayName?: string }
 * ) => Promise<void>}
 */
const startButtonSetup = async (
  renderer,
  onStart3D,
  onStartAR,
  { locationString = "/", displayName = "START" } = {},
) => {
  const domOverlayDiv = document.getElementById("dom-overlay");
  if (!domOverlayDiv) return;

  removeIfExists("start-button");
  // ARButton.createButton already removes its own existing ARButton, but keep this
  // here so we’re robust even if ARButton changes.
  removeIfExists("ARButton");

  // --------------------------------------------------
  // AR button (only if supported)
  // --------------------------------------------------
  let arSupported = false;
  // $FlowFixMe
  if (navigator.xr && navigator.xr.isSessionSupported) {
    try {
      // $FlowFixMe
      arSupported = await navigator.xr.isSessionSupported("immersive-ar");
    } catch (e) {
      arSupported = false;
    }
  }

  // If AR is supported, only show START AR (do not render normal START).
  if (arSupported && typeof onStartAR === "function") {
    const buttonAr = ARButton.createButton(
      locationString,
      renderer,
      {
        requiredFeatures: ["hit-test"],
        optionalFeatures: ["dom-overlay"],
        domOverlay: { root: domOverlayDiv },
      },
      {
        onSessionStarted: () => {
          onStartAR(renderer);
        },
      },
    );

    if (buttonAr !== undefined) domOverlayDiv.appendChild(buttonAr);
    return;
  }

  // --------------------------------------------------
  // Start (normal 3D) button (only when AR is NOT supported)
  // --------------------------------------------------
  const startButton = document.createElement("button");
  startButton.id = "start-button";
  startButton.textContent = displayName;

  // Style/position exactly like ARButton’s “START AR” button.
  startButton.style.position = "absolute";
  startButton.style.bottom = "20px";
  startButton.style.left = "calc(50% - 50px)";
  startButton.style.width = "100px";
  startButton.style.padding = "12px 6px";
  startButton.style.border = "1px solid #fff";
  startButton.style.borderRadius = "4px";
  startButton.style.background = "rgba(0,0,0,0.1)";
  startButton.style.color = "#fff";
  startButton.style.font = "normal 13px sans-serif";
  startButton.style.textAlign = "center";
  startButton.style.opacity = "0.5";
  startButton.style.outline = "none";
  startButton.style.cursor = "pointer";
  startButton.style.zIndex = "10000";

  startButton.onmouseenter = () => {
    startButton.style.opacity = "1.0";
  };
  startButton.onmouseleave = () => {
    startButton.style.opacity = "0.5";
  };

  startButton.addEventListener("click", () => {
    startButton.remove();
    if (typeof onStart3D === "function") onStart3D(renderer);
  });
  domOverlayDiv.appendChild(startButton);
};

export default startButtonSetup;

