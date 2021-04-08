/**
 * Checks if the given value is a string.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a string.
 *
 * @example
 * isString('foo'); // true
 * isString(''); // true
 * isString({}); // false
 * isString([]); // false
 */
export const isString = (val: unknown): boolean =>
  Object.prototype.toString.call(val) === '[object String]';
