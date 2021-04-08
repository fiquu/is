import { isBrowser } from '../browser/browser';

/**
 * Checks if the current environment is Node.js.
 *
 * @returns {boolean} Whether the current environment is Node.js.
 */
export const isNodeJs = (): boolean =>
  !isBrowser() && typeof process === 'object';
