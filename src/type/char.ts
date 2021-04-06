import isString from './string';

/**
 * Checks if the given value is a single char.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a single char.
 *
 * @example
 * is.char('a'); // true
 * is.char('foo'); // false
 * is.char(1); // false
 * is.char(null); // false
 */
export default (val: string): boolean => isString(val) && val.length === 1;
