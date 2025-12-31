/**
 * Get the current time in milliseconds.
 * - Uses performance.now() if available, otherwise Date.now().
 * @returns {number}
 */
const nowMs = () => {
  // eslint-disable-next-line no-undef
  if (typeof performance !== "undefined" && typeof performance.now === "function") {
    return performance.now();
  }
  return Date.now();
};

export default nowMs;

