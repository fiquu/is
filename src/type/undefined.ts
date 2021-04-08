/**
 * Checks if the given value is undefined.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is undefined.
 *
 * @example
 * isUndefined(undefined); // true
 * isUndefined('not undefined'); // false
 */
export const isUndefined = (val: unknown): boolean =>
  val === void 0 || val === undefined;
