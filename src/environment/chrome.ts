import { getUserAgent } from './utility';
import { isFacebook } from './facebook';
import { isBrowser } from './browser';
import { isTwitter } from './twitter';
import { isVivaldi } from './vivaldi';
import { isOpera } from './opera';
import { isEdge } from './edge';

/**
 * Checks if the current browser is Chrome or Chromium.
 *
 * @returns {boolean} Whether the current browser is Chrome or Chromium.
 *
 * @example is.chrome();
 */
export const isChrome = (): boolean =>
  isBrowser() &&
  /(Chrome|Chromium)\//.test(getUserAgent()) &&
  !isOpera() &&
  !isVivaldi() &&
  !isEdge() &&
  !isFacebook() &&
  !isTwitter();
