import { number } from '../type';

/**
 * Checks if the given number is within the given minimum and maximum.
 *
 * @param {number} num The number to check.
 * @param {number} min The minimum value exclusive.
 * @param {number} max The maximum value exclusive.
 *
 * @returns {boolean} Whether the number is within the minimum and maximum.
 *
 * @example
 * is.within(0, -2, 2); // true
 * is.within(1, -2, 2); // true
 * is.within(0, 1, 3); // false
 * is.within(1, 1, 2); // false
 */
export default (num: number, min: number, max: number): boolean =>
  [num, min, max].every(number) && num > min && num < max;
