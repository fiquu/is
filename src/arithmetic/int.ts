import { isNumber } from '../type/number';

/**
 * Checks if the given number is an int.
 *
 * @param {number} num The number to check.
 *
 * @returns {boolean} Whether the number is an int.
 *
 * @example
 * isInt(13); // true
 * isInt(13.5); // false
 */
export const isInt = (num: number): boolean => isNumber(num) && num % 1 === 0;
