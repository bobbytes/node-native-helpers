import { PerformanceEntry } from 'perf_hooks';

import { MeasurePerformance, MeasurePerformanceEvent } from '../../src/measure-performance';

describe('MeasurePerformance', () => {
  let measurePerformance: MeasurePerformance;

  jest.useFakeTimers();

  beforeEach(() => {
    measurePerformance = new MeasurePerformance('unit-test');
  });

  test('must return execution time with an event', () => {
    expect(measurePerformance).toBeDefined();

    let executionTime: PerformanceEntry;
    measurePerformance.start();

    measurePerformance.on(MeasurePerformanceEvent.Measure, measure => executionTime = measure);

    setTimeout(() => {
      measurePerformance.stop();
    }, 500);

    jest.runAllTimers();

    expect(executionTime).toBeDefined();
    expect(executionTime.duration).toBeDefined();
    expect(typeof executionTime.duration).toEqual('number');
  });
});
