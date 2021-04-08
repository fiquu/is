import { isNumber } from '../type/number';

/**
 * Checks if the given number is positive.
 *
 * @param {number} num The number to check.
 *
 * @returns {boolean} Whether the number is positive.
 *
 * @example
 * isPositive(2); // true
 * isPositive(-3); // false
 */
export const isPositive = (num: number): boolean => isNumber(num) && num > 0;
