import { isNan } from './nan';

/**
 * Checks if the given value is a number.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a number.
 *
 * @example
 * isNumber(0); // true
 * isNumber(3.5); // true
 * isNumber('not number'); // false
 */
export const isNumber = (val: unknown): boolean =>
  !isNan(val) && Object.prototype.toString.call(val) === '[object Number]';
