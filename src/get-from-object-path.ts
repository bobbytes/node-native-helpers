/**
 * Get value from object by string path.
 * @param object
 * @param path
 * @param defaultValue
 */
export const getFromObjectPath = (object: {}, path: string, defaultValue?: any) => path
  .split('.')
  .reduce((accumulator, currentValue) =>
    accumulator && (accumulator[currentValue] !== undefined && accumulator[currentValue] !== null)
      ? accumulator[currentValue]
      : (defaultValue || undefined)
    , object);
