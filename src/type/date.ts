/**
 * Checks if the given value is a date object.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a date object.
 *
 * @example
 * isDate(new Date()); // true
 * isDate('not date'); // false
 */
export const isDate = (val: unknown): boolean =>
  Object.prototype.toString.call(val) === '[object Date]';
