import { isString } from '../type/string';

/**
 * Checks if the given string is a palindrome.
 *
 * @param {string} str The string to check.
 *
 * @returns {boolean} Whether the string is a palindrome.
 *
 * @example
 * is.palindrome('foobaraboof'); // true
 * is.palindrome('noon'); // true
 * is.palindrome('foobar'); // false
 * is.palindrome('bar'); // false
 */
export const isPalindrome = (str: string): boolean =>
  isString(str) && str === str.split('').reverse().join('');
