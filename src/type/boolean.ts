/**
 * Checks if the given value is a boolean.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a boolean.
 *
 * @example
 * is.bool(true); // true
 * is.bool(false); // true
 * is.bool('not boolean'); // false
 */
export const isBoolean = (val: unknown): boolean =>
  val === true ||
  val === false ||
  Object.prototype.toString.call(val) === '[object Boolean]';
