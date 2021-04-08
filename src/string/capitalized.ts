/**
 * Checks if the given string is word-capitalized.
 *
 * @param {string} str The string to check.
 *
 * @returns {boolean} Whether the string is word-capitalized.
 *
 * @example
 * isCapitalized('Foo'); // true
 * isCapitalized('Foo Bar Baz'); // true
 * isCapitalized('Foo bar baz'); // false
 * isCapitalized('foo'); // false
 */
export const isCapitalized = (str: string): boolean => {
  const capitalized: boolean[] = [];
  const words = str.split(/\s+/);

  for (const word of words) {
    const [first] = word;

    capitalized.push(first === first.toUpperCase());
  }

  return capitalized.every(i => i);
};
