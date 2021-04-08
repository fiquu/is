import { getUserAgent } from '../browser/utility';
import { isBrowser } from '../browser/browser';

/**
 * Checks if the current device is an iPhone.
 *
 * @returns {boolean} Whether the current device is an iPhone.
 */
export const isIphone = (): boolean =>
  isBrowser() && /iphone/i.test(getUserAgent());
