/**
 * @returns {RegExp} The RegExp pattern used to perform the check.
 */
export const getRegExp = (): RegExp =>
  /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/;

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
 * isDomain('example.com'); // true
 * isDomain('subdomain.example.com'); // true
 * isDomain('sub.domain.example.website'); // true
 * isDomain('not_a_domain'); // false
 * isDomain(1234); // false
 * isDomain(true); // false
 */
export const isDomain = (val: string): boolean => getRegExp().test(val);
