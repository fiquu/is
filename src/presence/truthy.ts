import { isNan } from '../type/nan';
import { exists } from './exists';

/**
 * Checks if the given value is truthy.
 *
 * @param {unknown} val The value to check.
 *
 * @returns {boolean} Whether the value is truthy.
 *
 * @example
 * isTruthy(true); // true
 * isTruthy('a string'); // true
 * isTruthy(1); // true
 * isTruthy(0); // false
 * isTruthy(null); // false
 * isTruthy(undefined); // false
 * isTruthy(false); // false
 * isTruthy(NaN); // false
 */
export const isTruthy = (val: unknown): boolean =>
  exists(val) && val !== false && !isNan(val) && val !== '' && val !== 0;
