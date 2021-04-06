/**
 * Checks if the given number is finite using native `isFinite`.
 *
 * @param {number} num The number to check.
 *
 * @returns {boolean} Whether the number is finite.
 *
 * @example
 * is.finite(13); // true
 * is.finite(Infinity); // false
 */
export default (num: number): boolean => isFinite(num);
