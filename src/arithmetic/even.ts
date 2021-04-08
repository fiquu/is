import { isNumber } from '../type/number';

/**
 * Checks if the given number is even.
 *
 * @param {number} num The number to check.
 *
 * @returns {boolean} Whether the number is even.
 *
 * @example
 * isEven(2); // true
 * isEven(3); // false
 */
export const isEven = (num: number): boolean => isNumber(num) && num % 2 === 0;
