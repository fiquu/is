import { isNumber } from '../type/number';

/**
 * Checks if the given number is greater than the given minimum.
 *
 * @param {number} num The number to check.
 * @param {number} min The minimum value exclusive.
 *
 * @returns {boolean} Whether the number is greater than the minimum.
 *
 * @example
 * isAbove(3, 2); // true
 * isAbove(2, 3); // false
 * isAbove(3, 3); // false
 */
export const isAbove = (num: number, min: number): boolean =>
  isNumber(num) && isNumber(min) && num > min;
