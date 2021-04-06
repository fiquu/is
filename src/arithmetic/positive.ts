import isNumber from '../type/number';

/**
 * Checks if the given number is positive.
 *
 * @param {number} num The number to check.
 *
 * @returns {boolean} Whether the number is positive.
 *
 * @example
 * is.positive(2); // true
 * is.positive(-3); // false
 */
export default (num: number): boolean => isNumber(num) && num > 0;
