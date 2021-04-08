/**
 * Checks if the given object is not null or undefined.
 *
 * @param {unknown} val The value to check.
 *
 * @returns {boolean} Whether the value is not null or undefined.
 *
 * @example
 * exists(123); // true
 * exists(0); // true
 * exists(undefined); // false
 * exists(null); // false
 */
export const exists = (val: unknown): boolean =>
  val !== null && val !== undefined;
