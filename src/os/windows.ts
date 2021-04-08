import { getAppVersion } from '../browser/utility';
import { isBrowser } from '../browser/browser';

/**
 * Checks if the current device running Windows.
 *
 * @returns {boolean} Whether the current device running Windows.
 */
export const isWindows = (): boolean =>
  isBrowser() && /win/i.test(getAppVersion());
