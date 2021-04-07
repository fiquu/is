import { isBrowser } from './browser';
import { getUserAgent } from './utility';

/**
 * Checks if the current browser is Opera.
 *
 * @returns {boolean} Whether the current browser is Opera.
 *
 * @example is.opera();
 */
export const isOpera = (): boolean =>
  isBrowser() && /(Opera|OPR)\//.test(getUserAgent());
