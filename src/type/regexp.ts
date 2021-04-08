/**
 * Checks if the given value is a RegExp.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a RegExp.
 *
 * @example
 * isRegexp(/regexp/gi); // true
 * isRegexp(new RegExp('regexp' ,'gi')); // true
 * isRegexp({}); // false
 * isRegexp('not regexp'); // false
 */
export const isRegExp = (val: unknown): boolean =>
  Object.prototype.toString.call(val) === '[object RegExp]';
