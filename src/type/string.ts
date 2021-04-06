/**
 * Checks if the given value is a string.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a string.
 *
 * @example
 * is.string('foo'); // true
 * is.string(''); // true
 * is.string({}); // false
 * is.string([]); // false
 */
export default (val: unknown): boolean =>
  Object.prototype.toString.call(val) === '[object String]';
