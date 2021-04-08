/**
 * Checks for a valid base64 string.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a base64 string.
 *
 * @see https://bit.dev/chriso/validator-js/is-base64/
 *
 * @example
 * isBase64String('ZmktaXM='); // true
 * isBase64String('1'); // false
 * isBase64String(true); // false
 */
export const isBase64 = (val: string): boolean => {
  if (!val) {
    return false;
  }

  const { length } = val;

  if (!length || length % 4 !== 0 || /[^A-Z0-9+\/=]/i.test(val)) {
    return false;
  }

  const firstPaddingChar = val.indexOf('=');

  return (
    firstPaddingChar === -1 ||
    firstPaddingChar === length - 1 ||
    (firstPaddingChar === length - 2 && val[length - 1] === '=')
  );
};
