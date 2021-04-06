import isNan from '../type/nan';
import isString from '../type/string';
import isArray from '../type/array';
import isBoolean from '../type/boolean';
import isNumber from '../type/number';
import isDate from '../type/date';
import isObject from '../type/object';
import isFunction from '../type/function';
import exists from './exists';

/**
 * Checks if the given object is empty. Treats null and undefined as such.
 *
 * @param {unknown} val The value to check.
 *
 * @returns {boolean} Whether the value is empty.
 *
 * @example
 * is.empty({}); // true
 * is.empty(''); // true
 * is.empty([]); // true
 * is.empty(new Date('invalid date')); // true
 * is.empty(null); // true
 * is.empty(undefined); // true
 * is.empty(0); // false
 * is.empty(-1); // false
 * is.empty(1); // false
 * is.empty(true); // false
 * is.empty(false); // false
 * is.empty(new Date()); // false
 * is.empty({ not: 'empty' }); // false
 * is.empty(['not', 'empty']); // false
 * is.empty('not empty'); // false
 */
export default (val: unknown): boolean => {
  if (!exists(val)) {
    return true;
  }

  if (isString(val) || isArray(val)) {
    return (val as string).length === 0;
  }

  if (isNumber(val) || isBoolean(val)) {
    return false;
  }

  if (isNan(val)) {
    return true;
  }

  if (isDate(val)) {
    return isNan(val.valueOf());
  }

  if (isFunction(val)) {
    return false;
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0;
  }

  return !Boolean(val);
};
