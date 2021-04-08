/**
 * Checks for a valid UUID (v1, v3, v4, v5) string.
 *
 * @param {any} val The value to check.
 *
 * @returns {boolean} Whether the value is an UUID string.
 *
 * @example
 * isUuid('b7557270-735b-11ea-9135-cb86b071733e'); // true (v1)
 * isUuid('0d0b682a-57ef-3539-94af-70e6678afe40'); // true (v3)
 * isUuid('c39b9935-8374-4ea0-b76b-7313dc929be7'); // true (v4)
 * isUuid('2bd4ebf8-85a4-5add-b18c-eff4bd14a13a'); // true (v5)
 * isUuid('foo-2bd4ebf8-85a4-5add-b18c-eff4bd14a13a-bar'); // false
 * isUuid('not uuid'); // false
 * isUuid('12345'); // false
 */
export const isUuid = (val: string): boolean =>
  /^[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}$/.test(
    val
  );
