import { getFromObjectPath } from '../../src/get-from-object-path';

describe('getFromObjectPath', () => {
  const object = {
    nested: {
      foo: 'bar',
    },
  };

  test('must get value from object path', () => {
    const path = 'nested.foo';
    const value = getFromObjectPath(object, path);

    expect(value).toEqual(object.nested.foo);
  });

  test('must get value from invalid object path', () => {
    const path = 'nested.bar';
    const value = getFromObjectPath(object, path);

    expect(value).toEqual(undefined);
  });

  test('must get value from object path with default value', () => {
    const path = 'nested.bar';
    const defaultValue = 'foo';
    const value = getFromObjectPath(object, path, defaultValue);

    expect(value).toEqual(defaultValue);
  });
});
