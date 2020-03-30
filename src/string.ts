import { truthy } from './presence';
import { string } from './type';

/**
 * Checks if the given string is all in uppercase.
 *
 * @param {string} str The string to check.
 *
 * @returns {boolean} Whether the string is all in uppercase.
 *
 * @example
 * is.upperCase('FOOBAR'); // true
 * is.upperCase('FooBaR'); // false
 * is.upperCase('foobar'); // false
 */
export const upperCase = (str: string): boolean => string(str) && str === str.toUpperCase();

/**
 * Checks if the given string is all in lowercase.
 *
 * @param {string} str The string to check.
 *
 * @returns {boolean} Whether the string is all in lowercase.
 *
 * @example
 * is.lowerCase('foobar'); // true
 * is.lowerCase('FooBaR'); // false
 * is.lowerCase('FOOBAR'); // false
 */
export const lowerCase = (str: string): boolean => string(str) && str === str.toLowerCase();

/**
 * Checks if the given string is word-capitalized.
 *
 * @param {string} str The string to check.
 *
 * @returns {boolean} Whether the string is word-capitalized.
 *
 * @example
 * is.capitalized('Foo'); // true
 * is.capitalized('Foo Bar Baz'); // true
 * is.capitalized('Foo bar baz'); // false
 * is.capitalized('foo'); // false
 */
export const capitalized = (str: string): boolean => {
  const words = str.split(/\s+/);
  const capitalized = [];

  for (const word of words) {
    const [first] = word;

    capitalized.push(first === first.toUpperCase());
  }

  return capitalized.every(truthy);
};

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
export const palindrome = (str: string): boolean =>
  string(str) && str === str.split('').reverse().join('');
