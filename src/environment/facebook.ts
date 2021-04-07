import { getUserAgent } from './utility';
import { isBrowser } from './browser';

/**
 * Checks if the current browser is Facebook's internal web view.
 *
 * @returns {boolean} Whether the current browser is Facebook's internal webview.
 *
 * @example is.facebook();
 */
export const isFacebook = (): boolean =>
  isBrowser() && /FB_IAB/.test(getUserAgent());
