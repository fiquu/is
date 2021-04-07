import { getUserAgent } from './utility';
import { isBrowser } from './browser';

/**
 * Checks if the current device is an iPhone.
 *
 * @returns {boolean} Whether the current device is an iPhone.
 *
 * @example is.iphone();
 */
export const isIphone = (): boolean =>
  isBrowser() && /iphone/i.test(getUserAgent());
