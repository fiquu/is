/**
 * @returns {RegExp} The RegExp pattern used to perform the check.
 */
export const getRegExp = (): RegExp =>
  /^([a-zA-Z0-9_=]{4,})\.([a-zA-Z0-9_=]{4,})\.([a-zA-Z0-9_\-\+\/=]{4,})$/;

/**
 * Checks for a valid JWT string.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is a JWT string.
 *
 * @see https://regex101.com/library/oI0rR9
 *
 * @example
 * isJwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1dWlkIiwibmFtZSI6ImZpLWlzIn0.KPxCSQM35DOilazwkIrafyY_UHl1NoA_Q0PQG7DLVkc'); // true
 * isJwt('aaaa.b.cc'); // false
 * isJwt('a.b.c'); // false
 * isJwt('a.b'); // false
 * isJwt('not jwt'); // false
 * isJwt('12345'); // false
 */
export const isJwt = (val: string): boolean => getRegExp().test(val);
