import { isNumber } from '../type/number';

/**
 * Checks if the given number is a float.
 *
 * @param {number} num The number to check.
 *
 * @returns {boolean} Whether the number is a float.
 *
 * @example
 * isFloat(13.45); // true
 * isFloat(13); // false
 */
export const isFloat = (num: number): boolean => isNumber(num) && num % 1 !== 0;
