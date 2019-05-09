/**
 * Calculate percentile.
 * @param percentile
 * @param values
 */
export const calculatePercentile = (percentile: number, values: number[]): number => {
  if (!values || !values.length) {
    return;
  }

  if (percentile === 0) {
    return values[0];
  }

  const percentileIndex = Math.ceil(values.length * (percentile / 100)) - 1;
  return values[percentileIndex];
};
