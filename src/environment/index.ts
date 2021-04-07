export { isBrowser } from './browser';

export { isFirefox } from './firefox';

export { isEdge } from './edge';

export { isIe } from './ie';

export { isOpera } from './opera';

export { isVivaldi } from './vivaldi';

export { isTwitter } from './twitter';

export { isFacebook } from './facebook';

export { isChrome } from './chrome';

export { isSafari } from './safari';

export { isIphone } from './iphone';

export { isIpad } from './ipad';

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
export const android = (): boolean =>
  browser() && /android/i.test(getUserAgent());

/**
 * Checks if the current device is an Android phone.
 *
 * @returns {boolean} Whether the current device is an Android phone.
 *
 * @example is.androidPhone();
 */
export const androidPhone = (): boolean =>
  browser() &&
  /android/i.test(getUserAgent()) &&
  /mobile/i.test(getUserAgent());

/**
 * Checks if the current device is an Android tablet.
 *
 * @returns {boolean} Whether the current device is an Android tablet.
 *
 * @example is.androidTablet();
 */
export const androidTablet = (): boolean =>
  browser() &&
  /android/i.test(getUserAgent()) &&
  !/mobile/i.test(getUserAgent());

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
export const windowsPhone = (): boolean =>
  browser() && windows() && /phone/i.test(getUserAgent());

/**
 * Checks if the current device is a Windows tablet.
 *
 * @returns {boolean} Whether the current device is a Windows tablet.
 *
 * @example is.windowsTablet();
 */
export const windowsTablet = (): boolean =>
  browser() && windows() && !windowsPhone() && /touch/i.test(getUserAgent());

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
export const tablet = (): boolean =>
  browser() && (ipad() || androidTablet() || windowsTablet());

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
export const linux = (): boolean =>
  browser() && /linux/i.test(getUserAgent()) && !android();

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
export const online = (): boolean =>
  browser() && window.navigator && window.navigator.onLine;

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
