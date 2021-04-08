/**
 * Checks if the given value is an error object.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is an error object.
 *
 * @example
 * isError(new Error()); // true
 * isError('not error'); // false
 */
export const isError = (val: unknown): boolean =>
  Object.prototype.toString.call(val) === '[object Error]';
