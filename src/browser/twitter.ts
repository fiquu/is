import { getUserAgent } from './utility';
import { isBrowser } from './browser';

/**
 * Checks if the current browser is Twitter's internal web view.
 *
 * @returns {boolean} Whether the current browser is Twitter's internal webview.
 */
export const isTwitter = (): boolean =>
  isBrowser() && /Twitter/.test(getUserAgent());
