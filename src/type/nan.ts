/**
 * Checks if the given value is NaN. The difference with the native `isNaN` function is that this will not return true
 * for strings or other types and only for the NaN value, the only value that doesn't equals itself.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is NaN.
 *
 * @example
 * isNan(NaN); // true
 * isNan('not NaN'); // false
 * isNan(null); // false
 */
export const isNan = (val: unknown): boolean => val !== val;
