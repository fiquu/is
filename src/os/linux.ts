import { getUserAgent } from '../browser/utility';
import { isBrowser } from '../browser/browser';
import { isAndroid } from './android';

/**
 * Checks if the current device running Linux (excluding Android).
 *
 * @returns {boolean} Whether the current device running Linux.
 */
export const isLinux = (): boolean =>
  isBrowser() && /linux/i.test(getUserAgent()) && !isAndroid();
