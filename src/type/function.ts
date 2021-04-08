/**
 * Checks if the given value is a function with a fallback check for IE.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a function.
 *
 * @example
 * isFunction(async function () {}); // true
 * isFunction(function () {}); // true
 * isFunction('not function'); // false
 */
export const isFunction = (val: unknown): boolean =>
  Object.prototype.toString.call(val) === '[object Function]' ||
  Object.prototype.toString.call(val) === '[object AsyncFunction]' ||
  typeof val === 'function';
