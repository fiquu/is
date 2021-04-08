import { isNumber } from '../type/number';

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
 * isWithin(0, -2, 2); // true
 * isWithin(1, -2, 2); // true
 * isWithin(0, 1, 3); // false
 * isWithin(1, 1, 2); // false
 */
export const isWithin = (num: number, min: number, max: number): boolean =>
  [num, min, max].every(isNumber) && num > min && num < max;
