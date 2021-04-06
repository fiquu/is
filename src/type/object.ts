/**
 * Checks if the given value is an object.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is an object.
 *
 * @example
 * is.object({}); // true
 * is.object(function () {}); // false
 * is.object('not object'); // false
 */
export default (val: unknown): boolean =>
  Object.prototype.toString.call(val) === '[object Object]';
