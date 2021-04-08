import { getUserAgent } from './utility';
import { isBrowser } from './browser';

/**
 * Checks if the current browser is Firefox.
 *
 * @returns {boolean} Whether the current browser is Firefox.
 */
export const isFirefox = (): boolean =>
  isBrowser() && /Firefox\//.test(getUserAgent());
