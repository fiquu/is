import { number } from '../type';

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
export default (num: number): boolean => number(num) && num > 0;
