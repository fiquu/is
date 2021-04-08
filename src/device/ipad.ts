import { getUserAgent } from '../browser/utility';
import { isBrowser } from '../browser/browser';

/**
 * Checks if the current device is an iPad.
 *
 * @returns {boolean} Whether the current device is an iPad.
 */
export const isIpad = (): boolean =>
  isBrowser() && /ipad/i.test(getUserAgent());
