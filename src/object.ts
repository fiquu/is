import { object, number, string } from './type';

/**
 * Checks if the given object has the given number of properties.
 *
 * @param {object} obj The object to check.
 * @param {number} count The number of properties to expect.
 *
 * @returns {boolean} Whether the object has the number of properties.
 *
 * @example
 * is.propCount({wer: 'asd'}, 1); // true
 * is.propCount({}, 5); // false
 */
export const propCount = (obj: any, count: number): boolean => {
  if (!object(obj) || !number(count)) {
    return false;
  }

  return Object.keys(obj).length === count;
};

/**
 * Checks if the given object has the given property.
 *
 * @param {object} obj The object to check.
 * @param {string} prop The name of the property to search for.
 *
 * @returns {boolean} Whether the object has the property.
 *
 * @example
 * is.propertyDefined({wer: 'asd'}, 'wer'); // true
 * is.propertyDefined({}, 'wer'); // false
 */
export const propDefined = (obj: any, prop: string): boolean =>
  object(obj) && string(prop) && prop in obj;

/**
 * Checks if the given object is the window object.
 *
 * @param {object} obj The object to check.
 *
 * @returns {boolean} Whether the object is the window object.
 *
 * @example
 * is.windowObject(window); // true
 * is.windowObject({}); // false
 */
export const windowObject = (obj: any): boolean =>
  typeof obj === 'object' && 'navigator' in obj && 'location' in obj;

/**
 * Checks if the given object is a DOM node.
 *
 * @param {object} obj The object to check.
 *
 * @returns {boolean} Whether the object is a DOM node.
 *
 * @example
 * is.domNode(document.body); // true
 * is.domNode(document); // false
 * is.domNode('not DOM node'); // false
 * is.domNode(0); // false
 */
export const domNode = (obj: any): boolean =>
  typeof obj === 'object' && typeof obj.nodeType === 'number' && obj.nodeType === 1;
