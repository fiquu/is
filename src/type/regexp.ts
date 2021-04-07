/**
 * Checks if the given value is a RegExp.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a RegExp.
 *
 * @example
 * is.regexp(/regexp/gi); // true
 * is.regexp(new RegExp('regexp' ,'gi')); // true
 * is.regexp({}); // false
 * is.regexp('not regexp'); // false
 */
export const isRegExp = (val: unknown): boolean =>
  Object.prototype.toString.call(val) === '[object RegExp]';
