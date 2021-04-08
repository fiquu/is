import { isWindowsPhone } from './windows-phone';
import { getUserAgent } from '../browser/utility';
import { isBrowser } from '../browser/browser';
import { isWindows } from '../os/windows';

/**
 * Checks if the current device is a Windows tablet.
 *
 * @returns {boolean} Whether the current device is a Windows tablet.
 */
export const isWindowsTablet = (): boolean =>
  isBrowser() &&
  isWindows() &&
  !isWindowsPhone() &&
  /touch/i.test(getUserAgent());
