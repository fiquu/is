import { isTruthy } from './truthy';

/**
 * Checks if the given value is falsy.
 *
 * @param {unknown} val The object to check.
 *
 * @returns {boolean} Whether the value is falsy.
 *
 * @example
 * isFalsy(0); // true
 * isFalsy(null); // true
 * isFalsy(undefined); // true
 * isFalsy(NaN); // true
 * isFalsy(false); // true
 * isFalsy(true); // false
 * isFalsy('a string'); // false
 * isFalsy(1); // false
 */
export const isFalsy = (val: unknown): boolean => !isTruthy(val);
