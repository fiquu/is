import { isBrowser } from '../browser/browser';
import { isTablet } from './tablet';
import { isPhone } from './phone';

/**
 * Checks if the current device is a desktop device.
 *
 * @returns {boolean} Whether the current device is a desktop device.
 */
export const isDesktop = (): boolean =>
  isBrowser() && !isPhone() && !isTablet();
