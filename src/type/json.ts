import isString from './string';

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
export default (val: string): boolean => {
  if (!isString(val)) {
    return false;
  }

  try {
    JSON.parse(val);

    return true;
  } catch (e) {
    return false;
  }
};
