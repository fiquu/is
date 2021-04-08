import { getUserAgent } from './utility';
import { isBrowser } from './browser';

/**
 * Checks if the current browser is Vivaldi.
 *
 * @returns {boolean} Whether the current browser is Vivaldi.
 */
export const isVivaldi = (): boolean =>
  isBrowser() && /Vivaldi/.test(getUserAgent());
