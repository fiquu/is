/**
 * Checks if the given object is not null or undefined.
 *
 * @param {unknown} val The value to check.
 *
 * @returns {boolean} Whether the value is not null or undefined.
 *
 * @example
 * is.existy(123); // true
 * is.existy(0); // true
 * is.existy(undefined); // false
 * is.existy(null); // false
 */
export const exists = (val: unknown): boolean =>
  val !== null && val !== undefined;
