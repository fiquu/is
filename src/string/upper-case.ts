import { isString } from '../type/string';

/**
 * Checks if the given string is all in upper case.
 *
 * @param {string} str The string to check.
 *
 * @returns {boolean} Whether the string is all in upper case.
 *
 * @example
 * isUpperCase('FOOBAR'); // true
 * isUpperCase('FooBaR'); // false
 * isUpperCase('foobar'); // false
 */
export const isUpperCase = (str: string): boolean =>
  isString(str) && str === str.toUpperCase();
