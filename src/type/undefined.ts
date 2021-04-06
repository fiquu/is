/**
 * Checks if the given value is undefined.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is undefined.
 *
 * @example
 * is.undef(undefined); // true
 * is.undef('not undefined'); // false
 */
export default (val: unknown): boolean => val === void 0 || val === undefined;
