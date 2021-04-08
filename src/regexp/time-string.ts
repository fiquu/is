/**
 * Checks for a valid time string.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a time string.
 *
 * @example
 * isTimeString('13:45:30'); // true
 * isTimeString('12:12:90'); // false
 * isTimeString(true); // false
 */
export const isTimeString = (val: string): boolean =>
  // Match hours, minutes, and seconds, 24-hour clock.
  /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/.test(val);
