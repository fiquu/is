/**
 * Checks if the given number is infinite.
 *
 * @param {number} num The number to check.
 *
 * @returns {boolean} Whether the number is infinite.
 *
 * @example
 * is.infinite(Infinity); // true
 * is.infinite(13); // false
 */
export default (num: number): boolean => !isFinite(num);
