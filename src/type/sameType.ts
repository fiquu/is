import isNan from './nan';

/**
 * Checks if the given values are of same type preventing NaN and Number same type check.
 *
 * @param {any} a The first value to check.
 * @param {any} b The other value to check.
 *
 * @returns {boolean} Whether the values are of same type.
 *
 * @example
 * is.sameType(true, false); // true
 * is.sameType(1, 3); // true
 * is.sameType({}, []); // false
 * is.sameType('', null); // false
 */
export default (a: unknown, b: unknown): boolean => {
  if (isNan(a) || isNan(b)) {
    return isNan(a) && isNan(b);
  }

  return (
    Object.prototype.toString.call(a) === Object.prototype.toString.call(b)
  );
};
