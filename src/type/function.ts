/**
 * Checks if the given value is a function with a fallback check for IE.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a function.
 *
 * @example
 * is.func(function () {}); // true
 * is.func('not function'); // false
 */
export default (val: unknown): boolean =>
  Object.prototype.toString.call(val) === '[object Function]' ||
  Object.prototype.toString.call(val) === '[object AsyncFunction]' ||
  typeof val === 'function';
