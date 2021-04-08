import { getUserAgent } from './utility';
import { isBrowser } from './browser';

/**
 * Checks if the current browser is Edge.
 *
 * @returns {boolean} Whether the current browser is Edge.
 */
export const isEdge = (): boolean =>
  isBrowser() && /Edge\//.test(getUserAgent());
