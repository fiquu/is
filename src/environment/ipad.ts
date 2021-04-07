import { getUserAgent } from './utility';
import { isBrowser } from './browser';

/**
 * Checks if the current device is an iPad.
 *
 * @returns {boolean} Whether the current device is an iPad.
 *
 * @example isIpad();
 */
export const isIpad = (): boolean =>
  isBrowser() && /ipad/i.test(getUserAgent());
