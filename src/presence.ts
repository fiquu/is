import { nan, char, string, array, boolean, number, date, object, fn } from './type';

/**
 * Checks if the given object is not null or undefined.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is not null or undefined.
 *
 * @example
 * is.existy(123); // true
 * is.existy(0); // true
 * is.existy(undefined); // false
 * is.existy(null); // false
 */
export const existy = (val: any): boolean => val !== null && val !== undefined;

/**
 * Checks if the given value is truthy.
 *
 * @param {any} val The value to check.
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
export const truthy = (val: any): boolean =>
  existy(val) && val !== false && !nan(val) && val !== '' && val !== 0;

/**
 * Checks if the given value is falsy.
 *
 * @param {any} val The object to check.
 *
 * @returns {boolean} Whether the value is falsy.
 *
 * @example
 * is.falsy(0); // true
 * is.falsy(null); // true
 * is.falsy(undefined); // true
 * is.falsy(NaN); // true
 * is.falsy(false); // true
 * is.falsy(true); // false
 * is.falsy('a string'); // false
 * is.falsy(1); // false
 */
export const falsy = (val: any): boolean => !truthy(val);

/**
 * Checks if the given value is a space character. Checks for horizontal tab (9), line feed (10), vertical tab (11),
 * form feed (12), carriage return (13) and space (32).
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a space character.
 *
 * @example
 * is.space(' ');   // true
 * is.space('a');   // false
 * is.space('foo'); // false
 */
export const space = (val: string): boolean => {
  if (char(val)) {
    const code = val.charCodeAt(0);

    return (code > 8 && code < 14) || code === 32;
  }

  return false;
};

/**
 * Checks if the given object is empty. Treats null and undefined as such.
 *
 * @param {any} val The value to check.
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
export const empty = (val: any): boolean => {
  if (!existy(val)) {
    return true;
  }

  if (string(val) || array(val)) {
    return val.length === 0;
  }

  if (number(val) || boolean(val)) {
    return false;
  }

  if (nan(val)) {
    return true;
  }

  if (date(val)) {
    return nan(val.valueOf());
  }

  if (fn(val)) {
    return false;
  }

  if (object(val)) {
    return Object.keys(val).length === 0;
  }

  return !Boolean(val);
};
