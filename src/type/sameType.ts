import { isNan } from './nan';

/**
 * Checks if the given values are of same type preventing NaN and Number same type check.
 *
 * @param {any} a The first value to check.
 * @param {any} b The other value to check.
 *
 * @returns {boolean} Whether the values are of same type.
 *
 * @example
 * isSameType(true, false); // true
 * isSameType(1, 3); // true
 * isSameType({}, []); // false
 * isSameType('', null); // false
 */
export const isSameType = (a: unknown, b: unknown): boolean => {
  if (isNan(a) || isNan(b)) {
    return isNan(a) && isNan(b);
  }

  return (
    Object.prototype.toString.call(a) === Object.prototype.toString.call(b)
  );
};
