import { getAppVersion } from '../browser/utility';
import { isBrowser } from '../browser/browser';

/**
 * Checks if the current device running MacOS.
 *
 * @returns {boolean} Whether the current device running MacOS.
 */
export const isMacOs = (): boolean =>
  isBrowser() && /mac/i.test(getAppVersion());
