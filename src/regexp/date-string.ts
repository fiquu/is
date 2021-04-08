/**
 * Checks for a valid date string.
 *
 * Matches m/d/yy, m-d-yy, mm/dd/yyyy and mm/dd/yyyy, allowing any combination
 * of one or two digits for the day and month, and two or four digits for the
 * year.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a date string.
 *
 * @example
 * isDateString('11/11/2011'); // true
 * isDateString('1/5'); // false
 * isDateString(true); // false
 */
export const isDateString = (val: string): boolean =>
  /^(1[0-2]|0?[1-9])[/-](3[01]|[12][0-9]|0?[1-9])[/-](?:[0-9]{2})?[0-9]{2}$/.test(
    val
  );
