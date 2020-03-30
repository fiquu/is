import { equal } from './arithmetic';

/**
 * Checks if the given value is in the given array.
 *
 * @param {any} val The value to search for.
 * @param {any[]} arr The array to search into.
 *
 * @returns {boolean} Whether the value is in the array.
 *
 * @example
 * is.inArray(1, [1, 2, 3]); // true
 * is.inArray('wer', [1, 2, 3]); // false
 */
export const inArray = (val: any, arr: any[]): boolean => {
  return Boolean(arr.find(i => equal(i, val)));
};

/**
 * Checks if the given array is sorted.
 *
 * @param {any[]} arr The array to check.
 *
 * @returns {boolean} Whether the array is sorted.
 *
 * @example
 * is.sorted([1, 2, 3]); // true
 * is.sorted([2, 1, 5, 3]); // false
 */
export const sorted = (arr: any[]): boolean => {
  for (let i = 0, l = arr.length; i < l; i++) {
    if (arr[String(i)] > arr[i + 1]) {
      return false;
    }
  }

  return true;
};
