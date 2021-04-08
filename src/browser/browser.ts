/**
 * @returns {boolean} Whether current env is browser (or browser-like).
 */
export const isBrowser = (): boolean => {
  return typeof window !== 'undefined';
};
