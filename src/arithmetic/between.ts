import { isNumber } from '../type/number';

/**
 * Checks if the given number is between the given minimum and maximum (inclusive).
 *
 * @param {number} num The number to check.
 * @param {number} min The minimum value exclusive.
 * @param {number} max The maximum value exclusive.
 *
 * @returns {boolean} Whether the number is between the minimum and maximum (inclusive).
 *
 * @example
 * isBetween(0, -2, 2); // true
 * isBetween(1, -2, 2); // true
 * isBetween(1, 1, 2); // true
 * isBetween(0, 1, 3); // false
 * isBetween(10, 30, 50); // false
 */
export const isBetween = (num: number, min: number, max: number): boolean =>
  [num, min, max].every(isNumber) && num >= min && num <= max;
