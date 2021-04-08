import { isAndroidPhone } from './android-phone';
import { isWindowsPhone } from './windows-phone';
import { isBrowser } from '../browser/browser';
import { isIphone } from './iphone';
import { isIpod } from './ipod';

/**
 * Checks if the current device is a mobile device.
 *
 * @returns {boolean} Whether the current device is a mobile device.
 */
export const isPhone = (): boolean =>
  isBrowser() &&
  (isIphone() || isIpod() || isAndroidPhone() || isWindowsPhone());
