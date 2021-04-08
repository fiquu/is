import { isNumber } from '../type/number';
import { isString } from '../type/string';
import { isArray } from '../type/array';
import { isRegExp } from '../type/regexp';
import { isBoolean } from '../type/boolean';
import { isObject } from '../type/object';

/**
 * Checks if the given values are equal.
 *
 * @param {any} a The first value.
 * @param {any} b The other value.
 *
 * @returns {boolean} Whether the values are equal.
 *
 * @example
 * isEqual(1, 1); // true
 * isEqual([1, 2, 3], [1, 2, 3]); // true
 * isEqual([1, 2], ''); // false
 * isEqual(1, 2); // false
 */
export const isEqual = (
  a: unknown | unknown[],
  b: unknown | unknown[]
): boolean => {
  // Check 0 and -0 equity with Infinity and -Infinity.
  if (isNumber(a) && isNumber(b)) {
    return a === b && 1 / (a as number) === 1 / (b as number);
  }

  // Check regexps and strings equality.
  if ((isString(a) && isString(b)) || (isRegExp(a) && isRegExp(b))) {
    return String(a) === String(b);
  }

  // Check booleans equality.
  if (isBoolean(a) && isBoolean(b)) {
    return a === b;
  }

  // Check arrays equality.
  if (isArray(a) && isArray(b)) {
    if ((a as unknown[]).length !== (b as unknown[]).length) {
      return false;
    }

    return JSON.stringify(a) === JSON.stringify(b);
  }

  // Check objects equality.
  if (isObject(a) && isObject(b)) {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }

    return JSON.stringify(a) === JSON.stringify(b);
  }

  return false;
};
