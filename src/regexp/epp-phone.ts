/**
 * @returns {RegExp} The RegExp pattern used to perform the check.
 */
export const getRegExp = (): RegExp => /^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/;

/**
 * Checks for a valid extensible provisioning protocol formatted value.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is in extensible provisioning protocol format.
 *
 * @example
 * isEppPhone('+90.2322456789'); // true
 * isEppPhone('1'); // false
 * isEppPhone(true); // false
 */
export const isEppPhone = (val: string): boolean => getRegExp().test(val);
