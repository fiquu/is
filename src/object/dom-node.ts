/**
 * Checks if the given object is a DOM node.
 *
 * @param {object} obj The object to check.
 *
 * @returns {boolean} Whether the object is a DOM node.
 *
 * @example
 * isDomNode(document.body); // true
 * isDomNode(document); // false
 * isDomNode('not DOM node'); // false
 * isDomNode(0); // false
 */
export const isDomNode = (obj: unknown): boolean =>
  typeof obj === 'object' &&
  typeof (obj as Node).nodeType === 'number' &&
  (obj as Node).nodeType === 1;
