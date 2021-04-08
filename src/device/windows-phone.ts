import { getUserAgent } from '../browser/utility';
import { isBrowser } from '../browser/browser';
import { isWindows } from '../os/windows';

/**
 * Checks if the current device is a Windows phone.
 *
 * @returns {boolean} Whether the current device is a Windows phone.
 */
export const isWindowsPhone = (): boolean =>
  isBrowser() && isWindows() && /phone/i.test(getUserAgent());
