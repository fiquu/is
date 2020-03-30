/* eslint-disable max-lines */

const browser = typeof window !== 'undefined';
const userAgent = (browser && 'navigator' in window && 'userAgent' in navigator && navigator.userAgent) || '';
const appVersion = (browser && 'navigator' in window && 'appVersion' in navigator && navigator.appVersion) || '';

/**
 * Checks if the current browser is Firefox. This method doesn't support the
 * `all` or `any` interfaces.
 *
 * @returns {boolean} Whether the current browser is Firefox.
 *
 * @example is.firefox();
 */
export const firefox = (): boolean => browser && /Firefox\//.test(userAgent);

/**
 * Checks if the current browser is Edge. This method doesn't support the
 * `all` or `any` interfaces.
 *
 * @returns {boolean} Whether the current browser is Edge.
 *
 * @example is.firefox();
 */
const edge = (): boolean => browser && /Edge\//.test(userAgent);

/**
 * Checks if the current browser is Internet Explorer. This method doesn't support the `all` or `any` interfaces.
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
export const ie = (ver): boolean => {
  if (!ver) {
    return browser && (/MSIE/.test(userAgent) || 'ActiveXObject' in window);
  }

  if (ver >= 11) {
    return browser && 'ActiveXObject' in window;
  }

  return browser && new RegExp(`MSIE ${ver}`).test(userAgent);
};

/**
 * Checks if the current browser is Opera. This method doesn't support the `all` or `any` interfaces.
 *
 * @returns {boolean} Whether the current browser is Opera.
 *
 * @example is.opera();
 */
export const opera = (): boolean => browser && /(Opera|OPR)\//.test(userAgent);

/**
 * Checks if the current browser is Vivaldi. This method doesn't support the `all` or `any` interfaces.
 *
 * @returns {boolean} Whether the current browser is Vivaldi.
 *
 * @example is.vivaldi();
 */
export const vivaldi = (): boolean => browser && /Vivaldi/.test(userAgent);

/**
 * Checks if the current browser is Twitter's internal web view. This method doesn't support the `all` or `any`
 * interfaces.
 *
 * @returns {boolean} Whether the current browser is Twitter's internal webview.
 *
 * @example is.twitter();
 */
export const twitter = (): boolean => browser && /Twitter/.test(userAgent);

/**
 * Checks if the current browser is Facebook's internal web view. This method doesn't support the `all` or `any`
 * interfaces.
 *
 * @returns {boolean} Whether the current browser is Facebook's internal webview.
 *
 * @example is.facebook();
 */
export const facebook = (): boolean => browser && /FB_IAB/.test(userAgent);

/**
 * Checks if the current browser is Chrome or Chromium. This method doesn't
 * support the `all` or `any` interfaces.
 *
 * @returns {boolean} Whether the current browser is Chrome or Chromium.
 *
 * @example is.chrome();
 */
export const chrome = (): boolean =>
  browser && /(Chrome|Chromium)\//.test(userAgent) && !opera() && !vivaldi() && !edge() && !facebook() && !twitter();

/**
 * Checks if the current browser is Safari. This method doesn't support the `all` or `any` interfaces.
 *
 * @returns {boolean} Whether the current browser is Safari.
 *
 * @example is.safari();
 */
export const safari = (): boolean =>
  browser && /Safari/.test(userAgent) && !chrome() && !vivaldi() && !opera() && !edge() && !facebook() && !twitter();

/**
 * Checks if the current device is an iPhone. This method doesn't support the `all` or `any` interfaces.
 *
 * @returns {boolean} Whether the current device is an iPhone.
 *
 * @example is.iphone();
 */
export const iphone = (): boolean => browser && /iphone/i.test(userAgent);

/**
 * Checks if the current device is an iPad. This method doesn't support the `all` or `any` interfaces.
 *
 * @returns {boolean} Whether the current device is an iPad.
 *
 * @example is.ipad();
 */
export const ipad = (): boolean => browser && /ipad/i.test(userAgent);

/**
 * Checks if the current device is an iPod. This method doesn't support the `all` or `any` interfaces.
 *
 * @returns {boolean} Whether the current device is an iPod.
 *
 * @example is.ipod();
 */
export const ipod = (): boolean => browser && /ipod/i.test(userAgent);

/**
 * Checks if the current device is runnig iOS. This method doesn't support the `all` or `any` interfaces.
 *
 * @returns {boolean} Whether the current device is running iOS.
 *
 * @example is.ios();
 */
export const ios = (): boolean => browser && (iphone() || ipad() || ipod());

/**
 * Checks if the current device is an Android device. This method doesn't support the `all` or `any` interfaces.
 *
 * @returns {boolean} Whether the current device is an Android device.
 *
 * @example is.android();
 */
export const android = (): boolean => browser && /android/i.test(userAgent);

/**
 * Checks if the current device is an Android phone.This method doesn't support the `all` or `any` interfaces.
 *
 * @returns {boolean} Whether the current device is an Android phone.
 *
 * @example is.androidPhone();
 */
export const androidPhone = (): boolean => browser && /android/i.test(userAgent) && /mobile/i.test(userAgent);

/**
 * Checks if the current device is an Android tablet.This method doesn't support the `all` or `any` interfaces.
 *
 * @returns {boolean} Whether the current device is an Android tablet.
 *
 * @example is.androidTablet();
 */
export const androidTablet = (): boolean => browser && /android/i.test(userAgent) && !/mobile/i.test(userAgent);

/**
 * Checks if the current device is a Blackberry device. This method doesn't support the `all` or `any` interfaces.
 *
 * @returns {boolean} Whether the current device is a Blackberry device.
 *
 * @example is.blackberry();
 */
export const blackberry = (): boolean => browser && (/blackberry/i.test(userAgent) || /BB10/i.test(userAgent));

/**
 * Checks if the current device running Windows. This method doesn't support the `all` or `any` interfaces.
 *
 * @returns {boolean} Whether the current device running Windows.
 *
 * @example is.windows();
 */
export const windows = (): boolean => browser && /win/i.test(appVersion);

/**
 * Checks if the current device is a Windows phone.This method doesn't support the `all` or `any` interfaces.
 *
 * @returns {boolean} Whether the current device is a Windows phone.
 *
 * @example is.windowsPhone();
 */
export const windowsPhone = (): boolean => browser && windows() && /phone/i.test(userAgent);

/**
 * Checks if the current device is a Windows tablet.This method doesn't support the `all` or `any` interfaces.
 *
 * @returns {boolean} Whether the current device is a Windows tablet.
 *
 * @example is.windowsTablet();
 */
export const windowsTablet = (): boolean => browser && windows() && !windowsPhone() && /touch/i.test(userAgent);

/**
 * Checks if the current device is a mobile device.This method doesn't support the `all` or `any` interfaces.
 *
 * @returns {boolean} Whether the current device is a mobile device.
 *
 * @example is.mobile();
 */
export const mobile = (): boolean =>
  browser && (iphone() || ipod() || androidPhone() || blackberry() || windowsPhone());

/**
 * Checks if the current device is a tablet.This method doesn't support the `all` or `any` interfaces.
 *
 * @returns {boolean} Whether the current device is a tablet.
 *
 * @example is.tablet();
 */
export const tablet = (): boolean => browser && (ipad() || androidTablet() || windowsTablet());

/**
 * Checks if the current device is a desktop device.This method doesn't support the `all` or `any` interfaces.
 *
 * @returns {boolean} Whether the current device is a desktop device.
 *
 * @example is.desktop();
 */
export const desktop = (): boolean => browser && !mobile() && !tablet();

/**
 * Checks if the current device running Linux (excluding Android). This method doesn't support the `all` or `any`
 * interfaces.
 *
 * @returns {boolean} Whether the current device running Linux.
 *
 * @example is.linux();
 */
export const linux = (): boolean => browser && /linux/i.test(appVersion) && !android();

/**
 * Checks if the current device running MacOS. This method doesn't support the `all` or `any` interfaces.
 *
 * @returns {boolean} Whether the current device running MacOS.
 *
 * @example is.macos();
 */
export const macos = (): boolean => browser && /mac/i.test(appVersion);

/**
 * Alias for `macos`.
 */
export const osx = macos;

/**
 * Checks if the current device is on-line.This method doesn't support the `all` or `any` interfaces.
 *
 * @returns {boolean} Whether the current device is on-line.
 *
 * @example is.online();
 */
export const online = (): boolean => browser && navigator && navigator.onLine;

/**
 * Checks if the current device is off-line.This method doesn't support the `all` or `any` interfaces.
 *
 * @returns {boolean} Whether the current device is off-line.
 *
 * @example is.offline();
 */
export const offline = (): boolean => !online();

/**
 * Checks if the current device is touch capable.This method doesn't support the `all` or `any` interfaces.
 *
 * @returns {boolean} Whether the current device is touch capable.
 *
 * @example is.touchDevice();
 */
export const touchDevice = (): boolean => browser && ('ontouchstart' in window);

/**
 * Checks if the current environment is Node.js.This method doesn't support the `all` or `any` interfaces.
 *
 * @returns {boolean} Whether the current environment is Node.js.
 *
 * @example is.nodejs();
 */
export const nodejs = (): boolean => !browser && typeof process === 'object';
