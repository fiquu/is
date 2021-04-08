import { isBrowser } from '../browser/browser';

/**
 * Checks if the current device is on-line.
 *
 * @returns {boolean} Whether the current device is online.
 */
export const isOnline = (): boolean =>
  isBrowser() && window.navigator && window.navigator.onLine;
