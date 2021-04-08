import { getUserAgent } from '../browser/utility';
import { isBrowser } from '../browser/browser';

/**
 * Checks if the current device is an Android phone.
 *
 * @returns {boolean} Whether the current device is an Android phone.
 */
export const isAndroidPhone = (): boolean =>
  isBrowser() &&
  /android/i.test(getUserAgent()) &&
  /mobile/i.test(getUserAgent());
