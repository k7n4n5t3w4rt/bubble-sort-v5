let NODE_ENV  = "development";
let REMEMBER_ME  = false;
if (typeof process === "undefined" || process.release.name !== "node") {
  NODE_ENV = window.NODE_ENV;
  REMEMBER_ME = window.REMEMBER_ME;
}

export default {
  NODE_ENV,
  REMEMBER_ME,
};
