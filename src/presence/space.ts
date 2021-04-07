import { isChar } from '../type/char';

/**
 * Checks if the given value is a space character. Checks for horizontal tab (9), line feed (10), vertical tab (11),
 * form feed (12), carriage return (13) and space (32).
 *
 * @param {unknown} val The value to check.
 *
 * @returns {boolean} Whether the value is a space character.
 *
 * @example
 * is.space(' ');   // true
 * is.space('a');   // false
 * is.space('foo'); // false
 */
export const isSpace = (val: string): boolean => {
  if (isChar(val)) {
    const code = val.charCodeAt(0);

    return (code > 8 && code < 14) || code === 32;
  }

  return false;
};
