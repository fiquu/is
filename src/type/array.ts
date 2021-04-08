/**
 * Checks if the given value is an array using native `Array.isArray`.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is an array.
 *
 * @example
 * isArray([]); // true
 * isArray('not array'); // false
 */
export const isArray = (val: unknown): boolean => Array.isArray(val);
