/**
 * Checks if the given value is a JSON string.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a JSON string.
 *
 * @example
 * isJson('{ "some": "value" }'); // true
 * isJson({}); // false
 * isJson('not json'); // false
 */
export const isJson = (val: string): boolean => {
  try {
    JSON.parse(val);

    return true;
  } catch (e) {}

  return false;
};
