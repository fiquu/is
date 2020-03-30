import { number, string, array, regexp, boolean, object } from './type';

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
export const equal = (a: any, b: any): boolean => {
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

/**
 * Checks if the given number is even.
 *
 * @param {number} num The number to check.
 *
 * @returns {boolean} Whether the number is even.
 *
 * @example
 * is.even(2); // true
 * is.even(3); // false
 */
export const even = (num: number): boolean => number(num) && num % 2 === 0;

/**
 * Checks if the given number is odd.
 *
 * @param {number} num The number to check.
 *
 * @returns {boolean} Whether the number is odd.
 *
 * @example
 * is.odd(3); // true
 * is.odd(2); // false
 */
export const odd = (num: number): boolean => number(num) && num % 2 === 1;

/**
 * Checks if the given number is positive.
 *
 * @param {number} num The number to check.
 *
 * @returns {boolean} Whether the number is positive.
 *
 * @example
 * is.positive(2); // true
 * is.positive(-3); // false
 */
export const positive = (num: number): boolean => number(num) && num > 0;

/**
 * Checks if the given number is negative.
 *
 * @param {number} num The number to check.
 *
 * @returns {boolean} Whether the number is negative.
 *
 * @example
 * is.negative(-3); // true
 * is.negative(2); // false
 */
export const negative = (num: number): boolean => number(num) && num < 0;

/**
 * Checks if the given number is greater than the given minimum.
 *
 * @param {number} num The number to check.
 * @param {number} min The minimum value exclusive.
 *
 * @returns {boolean} Whether the number is greater than the minimum.
 *
 * @example
 * is.above(3, 2); // true
 * is.above(2, 3); // false
 * is.above(3, 3); // false
 */
export const above = (num: number, min: number): boolean => number(num) && number(min) && num > min;

/**
 * Checks if the given number is less than the given maximum.
 *
 * @param {number} num The number to check.
 * @param {number} max The maximum value exclusive.
 *
 * @returns {boolean} Whether the number is less than the maximum.
 *
 * @example
 * is.under(3, 2); // true
 * is.under(2, 3); // false
 * is.under(3, 3); // false
 */
export const under = (num: number, max: number): boolean => number(num) && number(max) && num < max;

/**
 * Checks if the given number is within the given minimum and maximum.
 *
 * @param {number} num The number to check.
 * @param {number} min The minimum value exclusive.
 * @param {number} max The maximum value exclusive.
 *
 * @returns {boolean} Whether the number is within the minimum and maximum.
 *
 * @example
 * is.within(0, -2, 2); // true
 * is.within(1, -2, 2); // true
 * is.within(0, 1, 3); // false
 * is.within(1, 1, 2); // false
 */
export const within = (num: number, min: number, max: number): boolean =>
  [num, min, max].every(number) && num > min && num < max;

/**
 * Checks if the given number is between the given minimum and maximum (inclusive).
 *
 * @param {number} num The number to check.
 * @param {number} min The minimum value exclusive.
 * @param {number} max The maximum value exclusive.
 *
 * @returns {boolean} Whether the number is between the minimum and maximum (inclusive).
 *
 * @example
 * is.between(0, -2, 2); // true
 * is.between(1, -2, 2); // true
 * is.between(1, 1, 2); // true
 * is.between(0, 1, 3); // false
 * is.between(10, 30, 50); // false
 */
export const between = (num, min, max): boolean =>
  [num, min, max].every(number) && num >= min && num <= max;

/**
 * Checks if the given number is a float.
 *
 * @param {number} num The number to check.
 *
 * @returns {boolean} Whether the number is a float.
 *
 * @example
 * is.float(13.45); // true
 * is.float(13); // false
 */
export const float = (num: number): boolean => number(num) && num % 1 !== 0;

/**
 * Checks if the given number is an int.
 *
 * @param {number} num The number to check.
 *
 * @returns {boolean} Whether the number is an int.
 *
 * @example
 * is.int(13); // true
 * is.int(13.5); // false
 */
export const int = (num: number): boolean => number(num) && num % 1 === 0;

/**
 * Checks if the given number is finite using native `isFinite`.
 *
 * @param {number} num The number to check.
 *
 * @returns {boolean} Whether the number is finite.
 *
 * @example
 * is.finite(13); // true
 * is.finite(Infinity); // false
 */
export const finite = isFinite;

/**
 * Checks if the given number is infinite.
 *
 * @param {number} num The number to check.
 *
 * @returns {boolean} Whether the number is infinite.
 *
 * @example
 * is.infinite(Infinity); // true
 * is.infinite(13); // false
 */
export const infinite = (num: number): boolean => !isFinite(num);
