/**
 * @returns {RegExp} The RegExp pattern used to perform the check.
 */
export const getRegExp = (): RegExp =>
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

/**
 * Checks for a valid email address.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is an email address.
 *
 * @example
 * isEmail('address@example.com'); // true
 * isEmail('address@not email'); // false
 * isEmail(true); // false
 */
export const isEmail = (val: string): boolean => getRegExp().test(val);
