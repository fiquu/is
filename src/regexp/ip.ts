import { isIpv4 } from './ipv4';
import { isIpv6 } from './ipv6';

/**
 * Checks for a valid IPv4 or IPv6 address.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is an IPv4 or IPv6 address.
 *
 * @example
 * isIp('2001:db8::ff00:42:8329'); // true
 * isIp('127.0.0.1'); // true
 * isIp('1.0.287.99'); // false
 * isIp('2001::::42:8329'); // false
 * isIp(true); // false
 */
export const isIp = (val: string): boolean => isIpv4(val) || isIpv6(val);
