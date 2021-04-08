import { getUserAgent } from '../browser/utility';
import { isBrowser } from '../browser/browser';

/**
 * Checks if the current device is an iPod.
 *
 * @returns {boolean} Whether the current device is an iPod.
 */
export const isIpod = (): boolean =>
  isBrowser() && /ipod/i.test(getUserAgent());
