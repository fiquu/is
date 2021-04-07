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
export const isSorted = (arr: unknown[]): boolean => {
  for (let i = 0, l = arr.length; i < l; i++) {
    if (arr[String(i)] > arr[i + 1]) {
      return false;
    }
  }

  return true;
};
