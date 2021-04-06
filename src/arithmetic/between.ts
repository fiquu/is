import isNumber from '../type/number';

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
 * is.between(0, -2, 2); // true
 * is.between(1, -2, 2); // true
 * is.between(1, 1, 2); // true
 * is.between(0, 1, 3); // false
 * is.between(10, 30, 50); // false
 */
export default (num: number, min: number, max: number): boolean =>
  [num, min, max].every(isNumber) && num >= min && num <= max;
