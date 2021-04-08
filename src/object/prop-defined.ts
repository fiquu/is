import { isObject } from '../type/object';
import { isString } from '../type/string';

/**
 * Checks if the given object has the given property.
 *
 * @param {object} obj The object to check.
 * @param {string} prop The name of the property to search for.
 *
 * @returns {boolean} Whether the object has the property.
 *
 * @example
 * isPropertyDefined({ wer: 'asd' }, 'wer'); // true
 * isPropertyDefined({}, 'wer'); // false
 */
export const hasPropDefined = (obj: unknown, prop: string): boolean =>
  isObject(obj) && isString(prop) && prop in (obj as Record<string, unknown>);
