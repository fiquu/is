/**
 * @returns {RegExp} The RegExp pattern used to perform the check.
 */
export const getRegExp = (): RegExp => /^[A-Za-z0-9]+$/;

/**
 * Checks for an alphanumeric string.
 *
 * @param {string} val The value to check.
 *
 * @returns {boolean} Whether the value is an alphanumeric string.
 *
 * @example
 * isAlphaNumeric('abc123'); // true
 * isAlphaNumeric('*?'); // false
 * isAlphaNumeric(true); // false
 */
export const isAlphanumeric = (val: string): boolean =>
  // eslint-disable-next-line security/detect-non-literal-regexp
  getRegExp().test(val);
