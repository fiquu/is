/**
 * @returns {RegExp} The RegExp pattern used to perform the check.
 */
export const getRegExp = (): RegExp =>
  /^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$/;

/**
 * Checks for a valid IPv4 address.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is an IPv4 address.
 *
 * @example
 * isIpv4('127.0.0.1'); // true
 * isIpv4('2001:db8::ff00:42:8329'); // false
 * isIpv4('5555.555.5.5'); // false
 * isIpv4(true); // false
 */
export const isIpv4 = (val: string): boolean => getRegExp().test(val);
