export default () => {
  // First thing we do is setup the mobile debug console
  // This library is very big so only use it while debugging
  // just comment it out when your app is done
  const containerEl = document.getElementById("console-ui");
  if (containerEl) {
    eruda.init({ container: containerEl });

    const root = containerEl.shadowRoot;
    if (root) {
      const devToolEl = root.querySelector(".eruda-dev-tools");
      if (devToolEl && devToolEl instanceof HTMLElement) {
        devToolEl.style.height = "40%"; // control the height of the dev tool panel
      }
    }
  }
};
