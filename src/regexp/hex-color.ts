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
 * isHexColor(0.287); // false
 * isHexColor(true); // false
 */
export const isHexColor = (val: string): boolean =>
  /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(val);
