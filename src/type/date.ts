/**
 * Checks if the given value is a date object.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a date object.
 *
 * @example
 * is.date(new Date()); // true
 * is.date('not date'); // false
 */
export default (val: unknown): boolean =>
  Object.prototype.toString.call(val) === '[object Date]';
