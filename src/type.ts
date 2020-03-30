/**
 * Checks if the given value is an array using native `Array.isArray`.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is an array.
 *
 * @example
 * is.array([]); // true
 * is.array('not array'); // false
 */
export const array = Array.isArray;

/**
 * Checks if the given value is a boolean.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a boolean.
 *
 * @example
 * is.bool(true); // true
 * is.bool(false); // true
 * is.bool('not boolean'); // false
 */
export const boolean = (val: any): boolean =>
  val === true || val === false || Object.prototype.toString.call(val) === '[object Boolean]';

/**
 * Alias for `boolean`.
 */
export const bool = boolean;

/**
 * Checks if the given value is a date object.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a date object.
 *
 * @example
 * is.date(new Date()); // true
 * is.date('not date'); // false
 */
export const date = (val: any): boolean => Object.prototype.toString.call(val) === '[object Date]';

/**
 * Checks if the given value is an error object.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is an error object.
 *
 * @example
 * is.error(new Error()); // true
 * is.error('not error'); // false
 */
export const error = (val: any): boolean => Object.prototype.toString.call(val) === '[object Error]';

/**
 * Checks if the given value is a function with a fallback check for IE.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a function.
 *
 * @example
 * is.func(function () {}); // true
 * is.func('not function'); // false
 */
export const func = (val: any): boolean =>
  Object.prototype.toString.call(val) === '[object Function]' ||
  Object.prototype.toString.call(val) === '[object AsyncFunction]' ||
  typeof val === 'function';

/**
 * Alias for `func`.
 */
export const fn = func;

/**
 * Checks if the given value is NaN. The difference with the native `isNaN` function is that this will not return true
 * for strings or other types and only for the NaN value, the only value that doesn't equals itself.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is NaN.
 *
 * @example
 * is.function(NaN); // true
 * is.function('not NaN'); // false
 * is.function(null); // false
 */
export const nan = (val: any): boolean => val !== val;

/**
 * Checks if the given value is a number.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a number.
 *
 * @example
 * is.number(0); // true
 * is.number(3.5); // true
 * is.number('not number'); // false
 */
export const number = (val: any): boolean =>
  !nan(val) && Object.prototype.toString.call(val) === '[object Number]';

/**
 * Checks if the given value is an object.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is an object.
 *
 * @example
 * is.object({}); // true
 * is.object(function () {}); // false
 * is.object('not object'); // false
 */
export const object = (val: any): boolean => Object.prototype.toString.call(val) === '[object Object]';

/**
 * Checks if the given value is a string.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a string.
 *
 * @example
 * is.string('foo'); // true
 * is.string(''); // true
 * is.string({}); // false
 * is.string([]); // false
 */
export const string = (val: any): boolean => Object.prototype.toString.call(val) === '[object String]';

/**
 * Checks if the given value is a JSON string.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a JSON string.
 *
 * @example
 * is.json('{ "some": "value" }'); // true
 * is.json({}); // false
 * is.json('not json'); // false
 */
export const json = (val: string): boolean => {
  if (string(val)) {
    try {
      JSON.parse(val);
      return true;
    } catch (e) {
      return false;
    }
  }

  return false;
};

/**
 * Checks if the given value is a RegExp.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a RegExp.
 *
 * @example
 * is.regexp(/regexp/gi); // true
 * is.regexp(new RegExp('regexp' ,'gi')); // true
 * is.regexp({}); // false
 * is.regexp('not regexp'); // false
 */
export const regexp = (val: any): boolean => Object.prototype.toString.call(val) === '[object RegExp]';

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
export const sameType = (a: any, b: any): boolean => {
  if (nan(a) || nan(b)) {
    return nan(a) && nan(b);
  }

  return Object.prototype.toString.call(a) === Object.prototype.toString.call(b);
};

/**
 * Checks if the given value is a single char.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a single char.
 *
 * @example
 * is.char('a'); // true
 * is.char('foo'); // false
 * is.char(1); // false
 * is.char(null); // false
 */
export const char = (val: string): boolean => string(val) && val.length === 1;

/**
 * Checks if the given value is undefined.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is undefined.
 *
 * @example
 * is.undef(undefined); // true
 * is.undef('not undefined'); // false
 */
export const undef = (val: any): boolean => val === void 0 || val === undefined;
