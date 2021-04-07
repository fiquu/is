import number from '../type/number';
import string from '../type/string';
import array from '../type/array';
import regexp from '../type/regexp';
import boolean from '../type/boolean';
import object from '../type/object';

/**
 * Checks if the given values are equal.
 *
 * @param {any} a The first value.
 * @param {any} b The other value.
 *
 * @returns {boolean} Whether the values are equal.
 *
 * @example
 * is.equal(1, 1); // true
 * is.equal([1, 2, 3], [1, 2, 3]); // true
 * is.equal([1, 2], ''); // false
 * is.equal(1, 2); // false
 */
export const isEqual = (
  a: unknown | unknown[],
  b: unknown | unknown[]
): boolean => {
  // Check 0 and -0 equity with Infinity and -Infinity.
  if (number(a) && number(b)) {
    return a === b && 1 / (a as number) === 1 / (b as number);
  }

  // Check regexps and strings equality.
  if ((string(a) && string(b)) || (regexp(a) && regexp(b))) {
    return String(a) === String(b);
  }

  // Check booleans equality.
  if (boolean(a) && boolean(b)) {
    return a === b;
  }

  // Check arrays equality.
  if (array(a) && array(b)) {
    if ((a as unknown[]).length !== (b as unknown[]).length) {
      return false;
    }

    return JSON.stringify(a) === JSON.stringify(b);
  }

  // Check objects equality.
  if (object(a) && object(b)) {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }

    return JSON.stringify(a) === JSON.stringify(b);
  }

  return false;
};
