/**
 * Checks for an alphanumeric string.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is an alphanumeric string.
 *
 * @example
 * isAlphaNumeric('abc123'); // true
 * isAlphaNumeric('*?'); // false
 * isAlphaNumeric(true); // false
 */
export const isAlphanumeric = (val: string): boolean =>
  /^[A-Za-z0-9]+$/.test(val);
