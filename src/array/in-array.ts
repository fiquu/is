import { isEqual } from '../arithmetic/equal';

/**
 * Checks if the given value is in the given array.
 *
 * @param {any} val The value to search for.
 * @param {any[]} arr The array to search into.
 *
 * @returns {boolean} Whether the value is in the array.
 *
 * @example
 * isInArray(1, [1, 2, 3]); // true
 * isInArray('wer', [1, 2, 3]); // false
 */
export const isInArray = (val: unknown, arr: unknown[]): boolean =>
  Boolean(arr.find(i => isEqual(i, val)));
