import isObject from '../type/object';
import isNumber from '../type/number';

/**
 * Checks if the given object has the given number of properties.
 *
 * @param {object} obj The object to check.
 * @param {number} count The number of properties to expect.
 *
 * @returns {boolean} Whether the object has the number of properties.
 *
 * @example
 * is.propCount({wer: 'asd'}, 1); // true
 * is.propCount({}, 5); // false
 */
export default (obj: unknown, count: number): boolean => {
  if (!isObject(obj) || !isNumber(count)) {
    return false;
  }

  return Object.keys(obj).length === count;
};
