import isNan from '../type/nan';
import exists from './exists';

/**
 * Checks if the given value is truthy.
 *
 * @param {unknown} val The value to check.
 *
 * @returns {boolean} Whether the value is truthy.
 *
 * @example
 * is.truthy(true); // true
 * is.truthy('a string'); // true
 * is.truthy(1); // true
 * is.truthy(0); // false
 * is.truthy(null); // false
 * is.truthy(undefined); // false
 * is.truthy(false); // false
 * is.truthy(NaN); // false
 */
export default (val: unknown): boolean =>
  exists(val) && val !== false && !isNan(val) && val !== '' && val !== 0;
