import { ExpireMap } from '../../src/expire-map';

describe('ExpireMap', () => {
  let map: ExpireMap;
  let receivedValue;

  const testEntries = [
    { key: 'fooKey', value: 'fooValue' },
    { key: 'barKey', value: 'barValue' },
  ];

  beforeEach(() => {
    map = new ExpireMap();
    receivedValue = undefined;
  });

  describe('set', () => {
    it('entry must not expire if no duration is set', (done) => {
      const { key, value } = testEntries[0];

      map.set(key, value);

      setTimeout(() => {
        receivedValue = map.get(key);
        expect(receivedValue).toEqual(value);
        done();
      }, 1);
    });

    it('entry must not expire if no duration is set to 0', (done) => {
      const { key, value } = testEntries[0];

      map.set(key, value, 0);

      setTimeout(() => {
        receivedValue = map.get(key);
        expect(receivedValue).toEqual(value);
        done();
      }, 1);
    });

    it('must delete expired entries before set new entry', (done) => {
      const [{ key: key1, value: value1 }, { key: key2, value: value2 }] = testEntries;

      map.set(key1, value1, 1);

      setTimeout(() => {
        map.set(key2, value2, 100);
        receivedValue = map.get(key1);
        expect(receivedValue).toBeUndefined();
        done();
      }, 2);
    });

    it('must not delete unexpired entries before set new entry', (done) => {
      const [{ key: key1, value: value1 }, { key: key2, value: value2 }] = testEntries;

      map.set(key1, value1, 600000);

      setTimeout(() => {
        map.set(key2, value2, 1);
        receivedValue = map.get(key1);
        expect(receivedValue).toEqual(value1);
        done();
      }, 2);
    });
  });

  describe('get', () => {
    it('must delete expired entries before get a unexpired entry', (done) => {
      const [{ key: key1, value: value1 }, { key: key2, value: value2 }] = testEntries;

      map.set(key2, value2, 1);

      setTimeout(() => {
        map.set(key1, value1, 0);
        receivedValue = map.get(key2);
        expect(receivedValue).toBeUndefined();
        done();
      }, 2);
    });

    it('must not delete unexpired entries before get a unexpired entry', (done) => {
      const [{ key, value }] = testEntries;

      map.set(key, value, 600000);

      setTimeout(() => {
        map.get(key);
        receivedValue = map.get(key);
        expect(receivedValue).toEqual(value);
        done();
      }, 2);
    });

    it('entry must be deleted if current timestamp is newer', (done) => {
      const [{ key, value }] = testEntries;

      map.set(key, value, 1);

      setTimeout(() => {
        receivedValue = map.get(key);
        expect(receivedValue).toBeUndefined();
        done();
      }, 2);
    });
  });

  describe('has', () => {
    it('must not return expired entry', (done) => {
      const [{ key, value }] = testEntries;

      map.set(key, value, 1);

      setTimeout(() => {
        receivedValue = map.has(key);
        expect(receivedValue).toBeFalsy();
        done();
      }, 2);
    });

    it('must return unexpired entry', (done) => {
      const [{ key, value }] = testEntries;

      map.set(key, value, 600000);

      setTimeout(() => {
        receivedValue = map.has(key);
        expect(receivedValue).toBeTruthy();
        done();
      }, 1);
    });
  });

  describe('keys', () => {
    it('must not return expired entry', (done) => {
      const [{ key: key1, value: value1 }, { key: key2, value: value2 }] = testEntries;

      map.set(key1, value1, 1);
      map.set(key2, value2, 600000);

      setTimeout(() => {
        const receivedKeys = Array.from(map.keys());

        expect(receivedKeys.length).toEqual(1);
        expect(receivedKeys[0]).toEqual(key2);
        done();
      }, 2);
    });

    it('must return unexpired entry', (done) => {
      const [{ key: key1, value: value1 }, { key: key2, value: value2 }] = testEntries;

      map.set(key1, value1, 1);
      map.set(key2, value2, 1);

      setTimeout(() => {
        const receivedKeys = Array.from(map.keys());

        expect(receivedKeys.length).toEqual(0);
        done();
      }, 2);
    });
  });

  describe('values', () => {
    it('must return unexpired entry', (done) => {
      const [{ key: key1, value: value1 }, { key: key2, value: value2 }] = testEntries;

      map.set(key1, value1, 1);
      map.set(key2, value2, 600000);

      setTimeout(() => {
        const receivedValues = Array.from(map.values());

        expect(receivedValues.length).toEqual(1);
        expect(receivedValues[0]).toEqual(value2);
        done();
      }, 2);
    });

    it('must not return expired entries', (done) => {
      const [{ key: key1, value: value1 }, { key: key2, value: value2 }] = testEntries;

      map.set(key1, value1, 1);
      map.set(key2, value2, 1);

      setTimeout(() => {
        const receivedValues = Array.from(map.values());

        expect(receivedValues.length).toEqual(0);
        done();
      }, 2);
    });
  });

  describe('entries', () => {
    it('must return unexpired entry', (done) => {
      const [{ key: key1, value: value1 }, { key: key2, value: value2 }] = testEntries;

      map.set(key1, value1, 1);
      map.set(key2, value2, 600000);

      setTimeout(() => {
        const receivedValues = Array.from(map.entries());

        expect(receivedValues.length).toEqual(1);
        expect(receivedValues[0]).toEqual([key2, value2]);
        done();
      }, 2);
    });

    it('must not return expired entries', (done) => {
      const [{ key: key1, value: value1 }, { key: key2, value: value2 }] = testEntries;

      map.set(key1, value1, 1);
      map.set(key2, value2, 1);

      setTimeout(() => {
        const receivedValues = Array.from(map.entries());

        expect(receivedValues.length).toEqual(0);
        done();
      }, 2);
    });
  });
});
