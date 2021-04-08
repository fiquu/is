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
export const isHex = (val: string): boolean => /^[0-9a-fA-F]+$/.test(val);
