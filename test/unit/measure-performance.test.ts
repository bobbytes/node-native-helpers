import { PerformanceEntry } from 'perf_hooks';

import { MeasurePerformance, MeasurePerformanceEvent, IMeasurementData } from '../../src/measure-performance';

describe('MeasurePerformance', () => {
  let measurePerformance: MeasurePerformance;
  let executionTime: PerformanceEntry;
  let receivedData: IMeasurementData;

  const onMeasurement = ({ measure, data }) => {
    executionTime = measure;
    receivedData = data;
  };

  jest.useFakeTimers();

  beforeEach(() => {
    measurePerformance = new MeasurePerformance('unit-test');
    executionTime = undefined;
    receivedData = undefined;
  });

  test('must return execution time with an event', () => {
    expect(measurePerformance).toBeInstanceOf(MeasurePerformance);

    measurePerformance.start();

    measurePerformance.on(MeasurePerformanceEvent.Measure, onMeasurement);

    setTimeout(() => {
      measurePerformance.stop();
    }, 500);

    jest.runAllTimers();

    expect(executionTime).toBeDefined();
    expect(executionTime.duration).toBeDefined();
    expect(typeof executionTime.duration).toEqual('number');
    expect(receivedData).toBeInstanceOf(Object);
    expect(receivedData.start).toBeInstanceOf(Object);
    expect(receivedData.stop).toBeInstanceOf(Object);
  });

  test('must return execution time with an event without id', () => {
    expect(measurePerformance).toBeInstanceOf(MeasurePerformance);

    measurePerformance = new MeasurePerformance();

    measurePerformance.start();

    measurePerformance.on(MeasurePerformanceEvent.Measure, onMeasurement);

    setTimeout(() => {
      measurePerformance.stop();
    }, 500);

    jest.runAllTimers();

    expect(executionTime).toBeDefined();
    expect(executionTime.duration).toBeDefined();
    expect(typeof executionTime.duration).toEqual('number');
    expect(receivedData).toBeInstanceOf(Object);
    expect(receivedData.start).toBeInstanceOf(Object);
    expect(receivedData.stop).toBeInstanceOf(Object);
  });

  test('must return additional data', () => {
    expect(measurePerformance).toBeInstanceOf(MeasurePerformance);

    const startData = { hello: 'world' };
    const stopData = { foo: 'bar' };

    measurePerformance.start(startData);

    measurePerformance.on(MeasurePerformanceEvent.Measure, onMeasurement);

    setTimeout(() => {
      measurePerformance.stop(stopData);
    }, 500);

    jest.runAllTimers();

    expect(executionTime).toBeDefined();
    expect(executionTime.duration).toBeDefined();
    expect(typeof executionTime.duration).toEqual('number');
    expect(receivedData).toBeInstanceOf(Object);
    expect(receivedData.start).toEqual(startData);
    expect(receivedData.stop).toEqual(stopData);
  });
});
