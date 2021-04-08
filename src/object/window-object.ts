/**
 * Checks if the given object is the window object.
 *
 * @param {object} obj The object to check.
 *
 * @returns {boolean} Whether the object is the window object.
 *
 * @example
 * isWindowObject(window); // true
 * isWindowObject({}); // false
 */
export const isWindowObject = (obj: unknown): boolean =>
  typeof obj === 'object' && 'navigator' in obj && 'location' in obj;
