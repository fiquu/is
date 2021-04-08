import { isBrowser } from '../browser/browser';
import { isIphone } from '../device/iphone';
import { isIpad } from '../device/ipad';
import { isIpod } from '../device/ipod';

/**
 * Checks if the current device is running iOS.
 *
 * @returns {boolean} Whether the current device is running iOS.
 */
export const isIos = (): boolean =>
  isBrowser() && (isIphone() || isIpad() || isIpod());
