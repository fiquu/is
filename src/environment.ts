/* eslint-disable max-lines */

/**
 * @returns {boolean} Whether current env is browser (or browser-like).
 */
function browser(): boolean {
  return typeof window !== 'undefined';
}

/**
 * @returns {string} The User Agent string.
 */
function getUserAgent(): string {
  return (browser() && 'navigator' in window && 'userAgent' in window.navigator && window.navigator.userAgent) || '';
}

/**
 * @returns {string} The App Version string.
 */
function getAppVersion(): string {
  return (browser() && 'navigator' in window && 'appVersion' in window.navigator && window.navigator.appVersion) || '';
}

/**
 * Checks if the current browser is Firefox.
 *
 * @returns {boolean} Whether the current browser is Firefox.
 *
 * @example is.firefox();
 */
export const firefox = (): boolean => browser() && /Firefox\//.test(getUserAgent());

/**
 * Checks if the current browser is Edge.
 *
 * @returns {boolean} Whether the current browser is Edge.
 *
 * @example is.firefox();
 */
export const edge = (): boolean => browser && /Edge\//.test(getUserAgent());

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
export const ie = (ver?: number): boolean => {
  if (!ver) {
    return browser() && (/MSIE/.test(getUserAgent()) || 'ActiveXObject' in window);
  }

  if (ver >= 11) {
    return browser() && 'ActiveXObject' in window;
  }

  return browser() && new RegExp(`MSIE ${ver}`).test(getUserAgent());
};

/**
 * Checks if the current browser is Opera.
 *
 * @returns {boolean} Whether the current browser is Opera.
 *
 * @example is.opera();
 */
export const opera = (): boolean => browser() && /(Opera|OPR)\//.test(getUserAgent());

/**
 * Checks if the current browser is Vivaldi.
 *
 * @returns {boolean} Whether the current browser is Vivaldi.
 *
 * @example is.vivaldi();
 */
export const vivaldi = (): boolean => browser() && /Vivaldi/.test(getUserAgent());

/**
 * Checks if the current browser is Twitter's internal web view.
 *
 * @returns {boolean} Whether the current browser is Twitter's internal webview.
 *
 * @example is.twitter();
 */
export const twitter = (): boolean => browser() && /Twitter/.test(getUserAgent());

/**
 * Checks if the current browser is Facebook's internal web view.
 *
 * @returns {boolean} Whether the current browser is Facebook's internal webview.
 *
 * @example is.facebook();
 */
export const facebook = (): boolean => browser() && /FB_IAB/.test(getUserAgent());

/**
 * Checks if the current browser is Chrome or Chromium.
 *
 * @returns {boolean} Whether the current browser is Chrome or Chromium.
 *
 * @example is.chrome();
 */
export const chrome = (): boolean =>
  browser() && /(Chrome|Chromium)\//.test(getUserAgent()) &&
  !opera() && !vivaldi() && !edge() && !facebook() && !twitter();

/**
 * Checks if the current browser is Safari.
 *
 * @returns {boolean} Whether the current browser is Safari.
 *
 * @example is.safari();
 */
export const safari = (): boolean =>
  browser() && /Safari/.test(getUserAgent()) &&
  !chrome() && !vivaldi() && !opera() && !edge() && !facebook() && !twitter();

/**
 * Checks if the current device is an iPhone.
 *
 * @returns {boolean} Whether the current device is an iPhone.
 *
 * @example is.iphone();
 */
export const iphone = (): boolean => browser() && /iphone/i.test(getUserAgent());

/**
 * Checks if the current device is an iPad.
 *
 * @returns {boolean} Whether the current device is an iPad.
 *
 * @example is.ipad();
 */
export const ipad = (): boolean => browser() && /ipad/i.test(getUserAgent());

/**
 * Checks if the current device is an iPod.
 *
 * @returns {boolean} Whether the current device is an iPod.
 *
 * @example is.ipod();
 */
export const ipod = (): boolean => browser() && /ipod/i.test(getUserAgent());

/**
 * Checks if the current device is runnig iOS.
 *
 * @returns {boolean} Whether the current device is running iOS.
 *
 * @example is.ios();
 */
export const ios = (): boolean => browser() && (iphone() || ipad() || ipod());

/**
 * Checks if the current device is an Android device.
 *
 * @returns {boolean} Whether the current device is an Android device.
 *
 * @example is.android();
 */
export const android = (): boolean => browser() && /android/i.test(getUserAgent());

/**
 * Checks if the current device is an Android phone.
 *
 * @returns {boolean} Whether the current device is an Android phone.
 *
 * @example is.androidPhone();
 */
export const androidPhone = (): boolean => browser() && /android/i.test(getUserAgent()) &&
  /mobile/i.test(getUserAgent());

/**
 * Checks if the current device is an Android tablet.
 *
 * @returns {boolean} Whether the current device is an Android tablet.
 *
 * @example is.androidTablet();
 */
export const androidTablet = (): boolean => browser() && /android/i.test(getUserAgent()) &&
  !(/mobile/i.test(getUserAgent()));

/**
 * Checks if the current device running Windows.
 *
 * @returns {boolean} Whether the current device running Windows.
 *
 * @example is.windows();
 */
export const windows = (): boolean => browser() && /win/i.test(getAppVersion());

/**
 * Checks if the current device is a Windows phone.
 *
 * @returns {boolean} Whether the current device is a Windows phone.
 *
 * @example is.windowsPhone();
 */
export const windowsPhone = (): boolean => browser() && windows() && /phone/i.test(getUserAgent());

/**
 * Checks if the current device is a Windows tablet.
 *
 * @returns {boolean} Whether the current device is a Windows tablet.
 *
 * @example is.windowsTablet();
 */
export const windowsTablet = (): boolean => browser() && windows() && !windowsPhone() &&
  /touch/i.test(getUserAgent());

/**
 * Checks if the current device is a mobile device.
 *
 * @returns {boolean} Whether the current device is a mobile device.
 *
 * @example is.mobile();
 */
export const mobile = (): boolean =>
  browser() && (iphone() || ipod() || androidPhone() || windowsPhone());

/**
 * Checks if the current device is a tablet.
 *
 * @returns {boolean} Whether the current device is a tablet.
 *
 * @example is.tablet();
 */
export const tablet = (): boolean => browser() && (ipad() || androidTablet() || windowsTablet());

/**
 * Checks if the current device is a desktop device.
 *
 * @returns {boolean} Whether the current device is a desktop device.
 *
 * @example is.desktop();
 */
export const desktop = (): boolean => browser() && !mobile() && !tablet();

/**
 * Checks if the current device running Linux (excluding Android).
 *
 * @returns {boolean} Whether the current device running Linux.
 *
 * @example is.linux();
 */
export const linux = (): boolean => browser() && /linux/i.test(getUserAgent()) && !android();

/**
 * Checks if the current device running MacOS.
 *
 * @returns {boolean} Whether the current device running MacOS.
 *
 * @example is.macos();
 */
export const macos = (): boolean => browser() && /mac/i.test(getAppVersion());

/**
 * Alias for `macos`.
 */
export const osx = macos;

/**
 * Checks if the current device is on-line.
 *
 * @returns {boolean} Whether the current device is on-line.
 *
 * @example is.online();
 */
export const online = (): boolean => browser() && window.navigator && window.navigator.onLine;

/**
 * Checks if the current device is off-line.
 *
 * @returns {boolean} Whether the current device is off-line.
 *
 * @example is.offline();
 */
export const offline = (): boolean => !online();

/**
 * Checks if the current device is touch capable.
 *
 * @returns {boolean} Whether the current device is touch capable.
 *
 * @example is.touchDevice();
 */
export const touchDevice = (): boolean => browser() && 'ontouchstart' in window;

/**
 * Checks if the current environment is Node.js.
 *
 * @returns {boolean} Whether the current environment is Node.js.
 *
 * @example is.nodejs();
 */
export const nodejs = (): boolean => !browser() && typeof process === 'object';
