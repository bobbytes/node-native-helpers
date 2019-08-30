import { MeasureTimestamp, MeasureTimestampEvent, IMeasureTimestamp, IMeasureTimestampData } from '../../src/measure-timestamp';

describe('MeasureTimestamp', () => {
  let measureTimestamp: MeasureTimestamp;
  let receivedMeasure: IMeasureTimestamp;
  let receivedData: IMeasureTimestampData;
  let startMilliseconds: number;

  const onMeasurement = ({ measure, data }) => {
    receivedMeasure = measure;
    receivedData = data;
  };

  jest.useFakeTimers();

  beforeEach(() => {
    measureTimestamp = new MeasureTimestamp();
    measureTimestamp.on(MeasureTimestampEvent.Measure, onMeasurement);
    startMilliseconds = Date.now();
    receivedMeasure = undefined;
    receivedData = undefined;
  });

  test('must return duration with an event', () => {
    expect(measureTimestamp).toBeInstanceOf(MeasureTimestamp);

    measureTimestamp.start(startMilliseconds);

    setTimeout(() => {
      const stopMilliseconds = Date.now();
      measureTimestamp.stop(stopMilliseconds);
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
    expect(measureTimestamp).toBeInstanceOf(MeasureTimestamp);

    const startData = { hello: 'world' };
    const stopData = { foo: 'bar' };

    measureTimestamp.start(startMilliseconds, startData);

    setTimeout(() => {
      const stopMilliseconds = Date.now();
      measureTimestamp.stop(stopMilliseconds, stopData);
    }, 500);

    jest.runAllTimers();

    expect(receivedMeasure).toBeDefined();
    expect(receivedMeasure.duration).toBeDefined();
    expect(typeof receivedMeasure.duration).toEqual('number');
    expect(receivedData).toBeInstanceOf(Object);
    expect(receivedData.start).toEqual(startData);
    expect(receivedData.stop).toEqual(stopData);
  });

  test('must throw error if invalid start milliseconds is provided', () => {
    expect(measureTimestamp).toBeInstanceOf(MeasureTimestamp);

    expect(() => {
      measureTimestamp.start(undefined);
    }).toThrow();
  });

  test('must throw error if invalid stop milliseconds is provided', () => {
    expect(measureTimestamp).toBeInstanceOf(MeasureTimestamp);

    measureTimestamp.start(startMilliseconds);

    expect(() => {
      measureTimestamp.stop(undefined);
    }).toThrow();
  });

  test('must throw error if invalid start milliseconds is greater than stop milliseconds', () => {
    expect(measureTimestamp).toBeInstanceOf(MeasureTimestamp);

    const stopMilliseconds = startMilliseconds - 1;

    measureTimestamp.start(startMilliseconds);

    expect(() => {
      measureTimestamp.stop(stopMilliseconds);
    }).toThrow();
  });

  test('must not throw error if start milliseconds and stop milliseconds are equal', () => {
    expect(measureTimestamp).toBeInstanceOf(MeasureTimestamp);

    measureTimestamp.start(startMilliseconds);

    measureTimestamp.stop(startMilliseconds);

    expect(receivedMeasure).toBeDefined();
    expect(receivedMeasure.duration).toBeDefined();
    expect(typeof receivedMeasure.duration).toEqual('number');
    expect(receivedData).toBeInstanceOf(Object);
    expect(receivedData.start).toBeInstanceOf(Object);
    expect(receivedData.stop).toBeInstanceOf(Object);
  });

  test('must throw error if no start milliseconds is provided', () => {
    expect(measureTimestamp).toBeInstanceOf(MeasureTimestamp);

    const stopMilliseconds = Date.now();

    expect(() => {
      measureTimestamp.stop(stopMilliseconds);
    }).toThrow();
  });

  test('must throw error if no start milliseconds and invalid stop milliseconds is provided', () => {
    expect(measureTimestamp).toBeInstanceOf(MeasureTimestamp);

    expect(() => {
      measureTimestamp.stop(undefined);
    }).toThrow();
  });

  test('must throw error if provided start milliseconds is smaller than 0', () => {
    expect(measureTimestamp).toBeInstanceOf(MeasureTimestamp);

    expect(() => {
      measureTimestamp.start(-1);
    }).toThrow();
  });

  test('must throw error if provided stop milliseconds is smaller than 0', () => {
    expect(measureTimestamp).toBeInstanceOf(MeasureTimestamp);

    const stopMilliseconds = -1;

    measureTimestamp.start(startMilliseconds);

    expect(() => {
      measureTimestamp.stop(stopMilliseconds);
    }).toThrow();
  });
});
