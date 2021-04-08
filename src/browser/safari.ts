import { getUserAgent } from './utility';
import { isFacebook } from './facebook';
import { isBrowser } from './browser';
import { isTwitter } from './twitter';
import { isVivaldi } from './vivaldi';
import { isChrome } from './chrome';
import { isOpera } from './opera';
import { isEdge } from './edge';

/**
 * Checks if the current browser is Safari.
 *
 * @returns {boolean} Whether the current browser is Safari.
 */
export const isSafari = (): boolean =>
  isBrowser() &&
  /Safari/.test(getUserAgent()) &&
  !isChrome() &&
  !isVivaldi() &&
  !isOpera() &&
  !isEdge() &&
  !isFacebook() &&
  !isTwitter();
