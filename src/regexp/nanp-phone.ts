/**
 * @returns {RegExp} The RegExp pattern used to perform the check.
 */
export const getRegExp = (): RegExp =>
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

/**
 * Checks for a valid north american number plan formatted value.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is in north american number plan format.
 *
 * @example
 * isNanpPhone('609-555-0175'); // true
 * isNanpPhone('1'); // false
 * isNanpPhone(true); // false
 */
export const isNanpPhone = (val: string): boolean => getRegExp().test(val);
