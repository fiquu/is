import { isString } from '../type/string';

/**
 * Checks if the given string is all in lower case.
 *
 * @param {string} str The string to check.
 *
 * @returns {boolean} Whether the string is all in lower case.
 *
 * @example
 * isLowerCase('foobar'); // true
 * isLowerCase('FooBaR'); // false
 * isLowerCase('FOOBAR'); // false
 */
export const isLowerCase = (str: string): boolean =>
  isString(str) && str === str.toLowerCase();
