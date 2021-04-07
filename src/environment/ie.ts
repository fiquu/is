import { getUserAgent } from './utility';
import { isBrowser } from './browser';

/**
 * Checks if the current browser is Internet Explorer.
 *
 * @param {number} ver The optional version number to check for.
 *
 * @returns {boolean} Whether the current browser is Internet Explorer.
 *
 * @example
 * is.ie();
 * is.ie(9);
 * is.ie(10);
 */
export const isIe = (ver?: number): boolean => {
  if (!ver) {
    return (
      isBrowser() && (/MSIE/.test(getUserAgent()) || 'ActiveXObject' in window)
    );
  }

  if (ver >= 11) {
    return isBrowser() && 'ActiveXObject' in window;
  }

  // eslint-disable-next-line security/detect-non-literal-regexp
  return isBrowser() && new RegExp(`MSIE ${ver}`).test(getUserAgent());
};
