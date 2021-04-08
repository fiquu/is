import { isNumber } from '../type/number';

/**
 * Checks if the given number is odd.
 *
 * @param {number} num The number to check.
 *
 * @returns {boolean} Whether the number is odd.
 *
 * @example
 * isOdd(3); // true
 * isOdd(2); // false
 */
export const isOdd = (num: number): boolean => isNumber(num) && num % 2 === 1;
