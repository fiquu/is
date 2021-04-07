import isNumber from '../type/number';

/**
 * Checks if the given number is negative.
 *
 * @param {number} num The number to check.
 *
 * @returns {boolean} Whether the number is negative.
 *
 * @example
 * is.negative(-3); // true
 * is.negative(2); // false
 */
export const isNegative = (num: number): boolean => isNumber(num) && num < 0;
