import isNumber from '../type/number';

/**
 * Checks if the given number is less than the given maximum.
 *
 * @param {number} num The number to check.
 * @param {number} max The maximum value exclusive.
 *
 * @returns {boolean} Whether the number is less than the maximum.
 *
 * @example
 * is.under(3, 2); // true
 * is.under(2, 3); // false
 * is.under(3, 3); // false
 */
export const isUnder = (num: number, max: number): boolean =>
  isNumber(num) && isNumber(max) && num < max;
