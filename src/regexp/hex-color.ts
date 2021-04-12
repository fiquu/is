/**
 * @returns {RegExp} The RegExp pattern used to perform the check.
 */
export const getRegExp = (): RegExp =>
  /^#?([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

/**
 * Checks for a valid hex color value.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is hex color.
 *
 * @example
 * isHexColor('#333'); // true
 * isHexColor('#444444'); // true
 * isHexColor('#abc123'); // true
 * isHexColor('#abc12380'); // true
 * isHexColor(0.287); // false
 * isHexColor(true); // false
 */
export const isHexColor = (val: string): boolean => getRegExp().test(val);
