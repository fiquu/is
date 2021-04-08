import { isString } from './string';

/**
 * Checks if the given value is a single char.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a single char.
 *
 * @example
 * isChar('a'); // true
 * isChar('foo'); // false
 * isChar(1); // false
 * isChar(null); // false
 */
export const isChar = (val: string): boolean =>
  isString(val) && val.length === 1;
