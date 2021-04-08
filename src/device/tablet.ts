import { isAndroidTablet } from './android-tablet';
import { isWindowsTablet } from './windows-tablet';
import { isBrowser } from '../browser/browser';
import { isIpad } from './ipad';

/**
 * Checks if the current device is a tablet.
 *
 * @returns {boolean} Whether the current device is a tablet.
 */
export const isTablet = (): boolean =>
  isBrowser() && (isIpad() || isAndroidTablet() || isWindowsTablet());
