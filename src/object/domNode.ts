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
export default (obj: unknown): boolean =>
  typeof obj === 'object' &&
  typeof (obj as Node).nodeType === 'number' &&
  (obj as Node).nodeType === 1;
