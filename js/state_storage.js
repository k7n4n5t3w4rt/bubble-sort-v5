import conf from "./config.js";

const getItem  = (
  itemName ,
  rememberMe  = conf.REMEMBER_ME,
)  => {
  // Browser only
  if (typeof process === "undefined" || process.release.name !== "node") {
    if (typeof rememberMe !== "undefined" && rememberMe === true) {
      //
      // Load data from sessionStorage
      // https://developer.mozilla.org/en-US/docs/Web/API/Storage
      return localStorage.getItem(itemName);
    } else {
      return sessionStorage.getItem(itemName);
    }
  } else {
    return "{}";
  }
};

const setItem  = (
  itemName ,
  itemValue ,
  rememberMe  = conf.REMEMBER_ME,
)  => {
  // Browser only
  if (typeof process === "undefined" || process.release.name !== "node") {
    if (typeof rememberMe !== "undefined" && rememberMe === true) {
      //
      // Load data from sessionStorage
      // https://developer.mozilla.org/en-US/docs/Web/API/Storage
      sessionStorage.clear();
      localStorage.setItem(itemName, itemValue);
    } else {
      localStorage.clear();
      sessionStorage.setItem(itemName, itemValue);
    }
  }
};

const clear  = (
  rememberMe  = conf.REMEMBER_ME,
)  => {
  // Browser only
  if (typeof process === "undefined" || process.release.name !== "node") {
    if (typeof rememberMe !== "undefined" && rememberMe === true) {
      //
      localStorage.clear();
    } else {
      sessionStorage.clear();
    }
  }
};
export default { getItem, setItem, clear };
