/* eslint-disable max-lines, max-len */

/**
 * Checks for a valid domain name.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a valid domain name.
 *
 * @see https://github.com/johnotander/domain-regex
 *
 * @example
 * is.domain('example.com'); // true
 * is.domain('subdomain.example.com'); // true
 * is.domain('sub.domain.example.website'); // true
 * is.domain('not_a_domain'); // false
 * is.domain(1234); // false
 * is.domain(true); // false
 */
export const domain = (val: string): boolean =>
  /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/
    .test(val);

/**
 * Checks for a valid URL.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is an URL.
 *
 * @example
 * is.url('http://example.com'); // true
 * is.url('http://not url dot com'); // false
 * is.url(true); // false
 */
export const url = (val: string): boolean =>
  /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)(:\d+)?((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/
    .test(val);

/**
 * Checks for a valid email address.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is an email address.
 *
 * @example
 * is.email('address@example.com'); // true
 * is.email('address@not email'); // false
 * is.email(true); // false
 */
export const email = (val: string): boolean =>
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    .test(val);

/**
 * Checks for a valid credit card number.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a credit card number.
 *
 * @example
 * is.creditCard(378282246310005); // true
 * is.creditCard(123); // false
 * is.creditCard(true); // false
 */
export const creditCard = (val: string): boolean =>
  /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/
    .test(val);

/**
 * Checks for an alphanumeric string.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is an alphanumeric string.
 *
 * @example
 * is.alphaNumeric('abc123'); // true
 * is.alphaNumeric('*?'); // false
 * is.alphaNumeric(true); // false
 */
export const alphaNumeric = (val: string): boolean =>
  /^[A-Za-z0-9]+$/
    .test(val);

export const alphanumeric = alphaNumeric;

/**
 * Checks for a valid time string.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a time string.
 *
 * @example
 * is.timeString('13:45:30'); // true
 * is.timeString('12:12:90'); // false
 * is.timeString(true); // false
 */
export const timeString = (val: string): boolean =>
  // Match hours, minutes, and seconds, 24-hour clock.
  /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/
    .test(val);

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
 * is.dateString('11/11/2011'); // true
 * is.dateString('1/5'); // false
 * is.dateString(true); // false
 */
export const dateString = (val: string): boolean =>
  /^(1[0-2]|0?[1-9])[/-](3[01]|[12][0-9]|0?[1-9])[/-](?:[0-9]{2})?[0-9]{2}$/
    .test(val);

/**
 * Checks for a valid base64 string.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a base64 string.
 *
 * @example
 * is.base64String('ZmktaXM='); // true
 * is.base64String('1'); // false
 * is.base64String(true); // false
 */
export const base64 = (val: string): boolean =>
  /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/
    .test(val);

/**
 * Checks for a valid north american number plan formatted value.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is in north american number plan format.
 *
 * @example
 * is.nanpPhone('609-555-0175'); // true
 * is.nanpPhone('1'); // false
 * is.nanpPhone(true); // false
 */
export const nanpPhone = (val: string): boolean =>
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    .test(val);

/**
 * Checks for a valid extensible provisioning protocol formatted value.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is in extensible provisioning protocol format.
 *
 * @example
 * is.eppPhone('+90.2322456789'); // true
 * is.eppPhone('1'); // false
 * is.eppPhone(true); // false
 */
export const eppPhone = (val: string): boolean =>
  /^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/
    .test(val);

/**
 * Checks for a valid international phone number formatted value (WhatsApp, Telegram, etc.).
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a valid international phone number.
 *
 * @example
 * is.intPhone('+140832245678901'); // true
 * is.intPhone('+297983652'); // true
 * is.intPhone('+126853653'); // true
 * is.intPhone('+0245673'); // false
 * is.intPhone('1'); // false
 * is.intPhone(true); // false
 */
export const intlPhone = (val: string): boolean =>
  /^\+[1-9][0-9]{0,4}[0-9]{2,14}?$/
    .test(val);

/**
 * Checks for a valid hexadecimal value.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is hexadecimal.
 *
 * @example
 * is.hex('ff'); // true
 * is.hex('ffFF'); // true
 * is.hex('fF0'); // true
 * is.hex(0.287); // false
 * is.hex(true); // false
 */
export const hex = (val: string): boolean =>
  /^[0-9a-fA-F]+$/
    .test(val);

/**
 * Checks for a valid hex color value.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is hex color.
 *
 * @example
 * is.hexColor('#333'); // true
 * is.hexColor('#444444'); // true
 * is.hexColor('#abc123'); // true
 * is.hexColor(0.287); // false
 * is.hexColor(true); // false
 */
export const hexColor = (val: string): boolean =>
  /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/
    .test(val);

/**
 * Checks for a valid IPv4 address.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is an IPv4 address.
 *
 * @example
 * is.ipv4('127.0.0.1'); // true
 * is.ipv4('2001:db8::ff00:42:8329'); // false
 * is.ipv4('5555.555.5.5'); // false
 * is.ipv4(true); // false
 */
export const ipv4 = (val: string): boolean =>
  /^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$/
    .test(val);

/**
 * Checks for a valid IPv6 address.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is an IPv6 address.
 *
 * @example
 * is.ipv6('2001:db8::ff00:42:8329'); // true
 * is.ipv6('127.0.0.1'); // false
 * is.ipv6('2001::::42:8329'); // false
 * is.ipv6(true); // false
 */
export const ipv6 = (val: string): boolean =>
  /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/
    .test(val);

/**
 * Checks for a valid IPv4 or IPv6 address.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is an IPv4 or IPv6 address.
 *
 * @example
 * is.ip('2001:db8::ff00:42:8329'); // true
 * is.ip('127.0.0.1'); // true
 * is.ip('1.0.287.99'); // false
 * is.ip('2001::::42:8329'); // false
 * is.ip(true); // false
 */
export const ip = (val: string): boolean => ipv4(val) || ipv6(val);

/**
 * Checks for a valid UUID (v1, v3, v4, v5) string.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is an UUID string.
 *
 * @example
 * is.uuid('b7557270-735b-11ea-9135-cb86b071733e'); // true (v1)
 * is.uuid('0d0b682a-57ef-3539-94af-70e6678afe40'); // true (v3)
 * is.uuid('c39b9935-8374-4ea0-b76b-7313dc929be7'); // true (v4)
 * is.uuid('2bd4ebf8-85a4-5add-b18c-eff4bd14a13a'); // true (v5)
 * is.uuid('foo-2bd4ebf8-85a4-5add-b18c-eff4bd14a13a-bar'); // false
 * is.uuid('not uuid'); // false
 * is.uuid('12345'); // false
 */
export const uuid = (val: string): boolean =>
  /^[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}$/.test(val);

/**
 * Checks for a valid JWT string.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is an UUID string.
 *
 * @see https://regex101.com/library/oI0rR9
 *
 * @example
 * is.jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1dWlkIiwibmFtZSI6ImZpLWlzIn0.KPxCSQM35DOilazwkIrafyY_UHl1NoA_Q0PQG7DLVkc'); // true
 * is.jwt('aaaa.b.cc'); // false
 * is.jwt('a.b.c'); // false
 * is.jwt('a.b'); // false
 * is.jwt('not jwt'); // false
 * is.jwt('12345'); // false
 */
export const jwt = (val: string): boolean =>
  /^([a-zA-Z0-9_=]{4,})\.([a-zA-Z0-9_=]{4,})\.([a-zA-Z0-9_\-\+\/=]{4,})$/.test(val);
