/**
 * @returns {RegExp} The RegExp pattern used to perform the check.
 */
export const getRegExp = (): RegExp =>
  /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)(:\d+)?((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/;

/**
 * Checks for a valid URL.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is an URL.
 *
 * @example
 * isUrl('http://example.com'); // true
 * isUrl('http://not url dot com'); // false
 * isUrl(true); // false
 */
export const isUrl = (val: string): boolean => getRegExp().test(val);
