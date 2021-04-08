/**
 * Checks for a valid credit card number.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a credit card number.
 *
 * @example
 * isCreditCard(378282246310005); // true
 * isCreditCard(123); // false
 * isCreditCard(true); // false
 */
export const isCreditCard = (val: string): boolean =>
  /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test(
    val
  );
