import { isBrowser } from '../browser/browser';

/**
 * Checks if the current device is touch capable.
 *
 * @returns {boolean} Whether the current device is touch capable.
 */
export const isTouchDevice = (): boolean =>
  isBrowser() && 'ontouchstart' in window;
