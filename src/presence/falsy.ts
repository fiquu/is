import { isTruthy } from './truthy';

/**
 * Checks if the given value is falsy.
 *
 * @param {unknown} val The object to check.
 *
 * @returns {boolean} Whether the value is falsy.
 *
 * @example
 * is.falsy(0); // true
 * is.falsy(null); // true
 * is.falsy(undefined); // true
 * is.falsy(NaN); // true
 * is.falsy(false); // true
 * is.falsy(true); // false
 * is.falsy('a string'); // false
 * is.falsy(1); // false
 */
export const isFalsy = (val: unknown): boolean => !isTruthy(val);
