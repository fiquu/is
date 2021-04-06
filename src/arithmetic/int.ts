import isNumber from '../type/number';

/**
 * Checks if the given number is an int.
 *
 * @param {number} num The number to check.
 *
 * @returns {boolean} Whether the number is an int.
 *
 * @example
 * is.int(13); // true
 * is.int(13.5); // false
 */
export default (num: number): boolean => isNumber(num) && num % 1 === 0;
