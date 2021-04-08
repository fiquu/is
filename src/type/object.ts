/**
 * Checks if the given value is an object.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is an object.
 *
 * @example
 * isObject({}); // true
 * isObject(function () {}); // false
 * isObject('not object'); // false
 */
export const isObject = (val: unknown): boolean =>
  Object.prototype.toString.call(val) === '[object Object]';
