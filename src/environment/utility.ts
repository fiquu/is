import { isBrowser } from './browser';

/**
 * @returns {string} The User Agent string.
 */
export const getUserAgent = (): string => {
  return (
    (isBrowser() &&
      'navigator' in window &&
      'userAgent' in window.navigator &&
      window.navigator.userAgent) ||
    ''
  );
};

/**
 * @returns {string} The App Version string.
 */
export const getAppVersion = (): string => {
  return (
    (isBrowser() &&
      'navigator' in window &&
      'appVersion' in window.navigator &&
      window.navigator.appVersion) ||
    ''
  );
};
