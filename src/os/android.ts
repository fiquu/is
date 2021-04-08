import { getUserAgent } from '../browser/utility';
import { isBrowser } from '../browser/browser';

/**
 * Checks if the current device is an Android device.
 *
 * @returns {boolean} Whether the current device is an Android device.
 */
export const isAndroid = (): boolean =>
  isBrowser() && /android/i.test(getUserAgent());
