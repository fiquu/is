import { number } from "../type";

/**
 * Checks if the given number is even.
 *
 * @param {number} num The number to check.
 *
 * @returns {boolean} Whether the number is even.
 *
 * @example
 * is.even(2); // true
 * is.even(3); // false
 */
export default (num: number): boolean => number(num) && num % 2 === 0;
