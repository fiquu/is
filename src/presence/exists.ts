/**
 * Checks if the given object is not null or undefined.
 *
 * @param {unknown} val The value to check.
 *
 * @returns {boolean} Whether the value is not null or undefined.
 *
 * @example
 * isExisty(123); // true
 * isExisty(0); // true
 * isExisty(undefined); // false
 * isExisty(null); // false
 */
export const exists = (val: unknown): boolean =>
  val !== null && val !== undefined;
