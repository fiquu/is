import { getUserAgent } from '../browser/utility';
import { isBrowser } from '../browser/browser';

/**
 * Checks if the current device is an Android tablet.
 *
 * @returns {boolean} Whether the current device is an Android tablet.
 */
export const isAndroidTablet = (): boolean =>
  isBrowser() &&
  /android/i.test(getUserAgent()) &&
  !/mobile/i.test(getUserAgent());
