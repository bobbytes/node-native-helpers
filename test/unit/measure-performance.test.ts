import { PerformanceEntry } from 'perf_hooks';

import { MeasurePerformance, MeasurePerformanceEvent } from '../../src/measure-performance';

describe('MeasurePerformance', () => {
  let measurePerformance: MeasurePerformance;
  let executionTime: PerformanceEntry;
  let eventData: {};

  jest.useFakeTimers();

  beforeEach(() => {
    measurePerformance = new MeasurePerformance('unit-test');
    executionTime = undefined;
    eventData = undefined;
  });

  test('must return execution time with an event', () => {
    expect(measurePerformance).toBeInstanceOf(MeasurePerformance);

    measurePerformance.start();

    measurePerformance.on(MeasurePerformanceEvent.Measure, ({ measure, data }) => {
      executionTime = measure;
      eventData = data;
    });

    setTimeout(() => {
      measurePerformance.stop();
    }, 500);

    jest.runAllTimers();

    expect(executionTime).toBeDefined();
    expect(executionTime.duration).toBeDefined();
    expect(typeof executionTime.duration).toEqual('number');
    expect(eventData).toBeInstanceOf(Object);
  });

  test('must return execution time with an event without id', () => {
    expect(measurePerformance).toBeInstanceOf(MeasurePerformance);

    measurePerformance = new MeasurePerformance();

    measurePerformance.start();

    measurePerformance.on(MeasurePerformanceEvent.Measure, ({ measure, data }) => {
      executionTime = measure;
      eventData = data;
    });

    setTimeout(() => {
      measurePerformance.stop();
    }, 500);

    jest.runAllTimers();

    expect(executionTime).toBeDefined();
    expect(executionTime.duration).toBeDefined();
    expect(typeof executionTime.duration).toEqual('number');
    expect(eventData).toBeInstanceOf(Object);
  });

  test('must return additional data', () => {
    expect(measurePerformance).toBeInstanceOf(MeasurePerformance);

    const startData = { hello: 'world' };
    const stopData = { foo: 'bar' };

    measurePerformance.start(startData);

    measurePerformance.on(MeasurePerformanceEvent.Measure, ({ measure, data }) => {
      executionTime = measure;
      eventData = data;
    });

    setTimeout(() => {
      measurePerformance.stop(stopData);
    }, 500);

    jest.runAllTimers();

    expect(executionTime).toBeDefined();
    expect(executionTime.duration).toBeDefined();
    expect(typeof executionTime.duration).toEqual('number');
    expect(eventData).toBeInstanceOf(Object);
    expect(eventData).toEqual({ ...startData, ...stopData });
  });
});
