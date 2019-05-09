/**
 * Check if value is an object.
 * @param value
 */
export const isObject = (value: {}): boolean =>
  (value && typeof value === 'object' && !Array.isArray(value));
