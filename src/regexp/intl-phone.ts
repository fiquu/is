/**
 * @returns {RegExp} The RegExp pattern used to perform the check.
 */
export const getRegExp = (): RegExp => /^\+[1-9][0-9]{0,4}[0-9]{2,14}?$/;

/**
 * Checks for a valid international phone number formatted value (WhatsApp, Telegram, etc.).
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a valid international phone number.
 *
 * @example
 * isIntPhone('+140832245678901'); // true
 * isIntPhone('+297983652'); // true
 * isIntPhone('+126853653'); // true
 * isIntPhone('+0245673'); // false
 * isIntPhone('1'); // false
 * isIntPhone(true); // false
 */
export const isIntlPhone = (val: string): boolean => getRegExp().test(val);
