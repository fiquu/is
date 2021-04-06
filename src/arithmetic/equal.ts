import { number, string, array, regexp, boolean, object } from "../type";

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
export default (a: any, b: any): boolean => {
  // Check 0 and -0 equity with Infinity and -Infinity.
  if (number(a) && number(b)) {
    return a === b && 1 / a === 1 / b;
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
    if (a.length !== b.length) {
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
