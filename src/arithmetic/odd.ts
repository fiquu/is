import isNumber from '../type/number';

/**
 * Checks if the given number is odd.
 *
 * @param {number} num The number to check.
 *
 * @returns {boolean} Whether the number is odd.
 *
 * @example
 * is.odd(3); // true
 * is.odd(2); // false
 */
export default (num: number): boolean => isNumber(num) && num % 2 === 1;
