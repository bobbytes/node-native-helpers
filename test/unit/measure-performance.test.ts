import { PerformanceEntry } from 'perf_hooks';

import { MeasurePerformance, MeasurePerformanceEvent, IMeasurePerformanceData } from '../../src/measure-performance';

describe('MeasurePerformance', () => {
  let measurePerformance: MeasurePerformance;
  let receivedMeasure: PerformanceEntry;
  let receivedData: IMeasurePerformanceData;

  const onMeasurement = ({ measure, data }) => {
    receivedMeasure = measure;
    receivedData = data;
  };

  jest.useFakeTimers();

  beforeEach(() => {
    measurePerformance = new MeasurePerformance('unit-test');
    measurePerformance.on(MeasurePerformanceEvent.Measure, onMeasurement);
    receivedMeasure = undefined;
    receivedData = undefined;
  });

  test('must return duration with an event', () => {
    expect(measurePerformance).toBeInstanceOf(MeasurePerformance);

    measurePerformance.start();

    setTimeout(() => {
      measurePerformance.stop();
    }, 500);

    jest.runAllTimers();

    expect(receivedMeasure).toBeDefined();
    expect(receivedMeasure.duration).toBeDefined();
    expect(typeof receivedMeasure.duration).toEqual('number');
    expect(receivedData).toBeInstanceOf(Object);
    expect(receivedData.start).toBeInstanceOf(Object);
    expect(receivedData.stop).toBeInstanceOf(Object);
  });

  test('must return execution time with an event without id', () => {
    expect(measurePerformance).toBeInstanceOf(MeasurePerformance);

    measurePerformance = new MeasurePerformance();
    measurePerformance.on(MeasurePerformanceEvent.Measure, onMeasurement);

    measurePerformance.start();

    setTimeout(() => {
      measurePerformance.stop();
    }, 500);

    jest.runAllTimers();

    expect(receivedMeasure).toBeDefined();
    expect(receivedMeasure.duration).toBeDefined();
    expect(typeof receivedMeasure.duration).toEqual('number');
    expect(receivedData).toBeInstanceOf(Object);
    expect(receivedData.start).toBeInstanceOf(Object);
    expect(receivedData.stop).toBeInstanceOf(Object);
  });

  test('must return additional data', () => {
    expect(measurePerformance).toBeInstanceOf(MeasurePerformance);

    const startData = { hello: 'world' };
    const stopData = { foo: 'bar' };

    measurePerformance.start(startData);

    setTimeout(() => {
      measurePerformance.stop(stopData);
    }, 500);

    jest.runAllTimers();

    expect(receivedMeasure).toBeDefined();
    expect(receivedMeasure.duration).toBeDefined();
    expect(typeof receivedMeasure.duration).toEqual('number');
    expect(receivedData).toBeInstanceOf(Object);
    expect(receivedData.start).toEqual(startData);
    expect(receivedData.stop).toEqual(stopData);
  });
});
