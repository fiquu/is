/**
 * @returns {RegExp} The RegExp pattern used to perform the check.
 */
export const getRegExp = (): RegExp => /^[0-9a-fA-F]+$/;

/**
 * Checks for a valid hexadecimal value.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is hexadecimal.
 *
 * @example
 * isHex('ff'); // true
 * isHex('ffFF'); // true
 * isHex('fF0'); // true
 * isHex(0.287); // false
 * isHex(true); // false
 */
export const isHex = (val: string): boolean => getRegExp().test(val);
