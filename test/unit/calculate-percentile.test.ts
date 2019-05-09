import { calculatePercentile } from '../../src/calculate-percentile';

describe('calculatePercentile', () => {
  const values = [2, 4, 4, 8, 8, 16, 32, 64, 128, 256];

  test('must calculate 0th percentile', () => {
    const percentile = calculatePercentile(0, values);

    expect(percentile).toEqual(2);
  });

  test('must calculate 25th percentile', () => {
    const percentile = calculatePercentile(25, values);

    expect(percentile).toEqual(4);
  });

  test('must calculate 50th percentile', () => {
    const percentile = calculatePercentile(50, values);

    expect(percentile).toEqual(8);
  });

  test('must calculate 75th percentile', () => {
    const percentile = calculatePercentile(75, values);

    expect(percentile).toEqual(64);
  });

  test('must calculate 90th percentile', () => {
    const percentile = calculatePercentile(90, values);

    expect(percentile).toEqual(128);
  });

  test('must calculate 95th percentile', () => {
    const percentile = calculatePercentile(95, values);

    expect(percentile).toEqual(256);
  });

  test('must calculate percentile with undefined values', () => {
    const percentile = calculatePercentile(95, undefined);

    expect(percentile).toEqual(undefined);
  });

  test('must calculate percentile with empty array values', () => {
    const percentile = calculatePercentile(95, []);

    expect(percentile).toEqual(undefined);
  });
});
