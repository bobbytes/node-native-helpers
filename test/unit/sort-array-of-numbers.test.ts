import { sortArrayOfNumbers, SortOrder } from '../../src/sort-array-of-numbers';

describe('sortArrayOfNumbers', () => {
  const randomValues = [64, 8, 128, 32, 4, 256, 16, 2, 4, 8];
  const valuesAscending = [2, 4, 4, 8, 8, 16, 32, 64, 128, 256];
  const valuesDescending = [256, 128, 64, 32, 16, 8, 8, 4, 4, 2];

  test('sort numbers ascending with no provided sort order', () => {
    const sortedValues = sortArrayOfNumbers(randomValues);

    expect(sortedValues).toEqual(valuesAscending);
  });

  test('sort numbers ascending with no provided ascending sort order', () => {
    const sortedValues = sortArrayOfNumbers(randomValues, SortOrder.Ascending);

    expect(sortedValues).toEqual(valuesAscending);
  });

  test('sort numbers ascending with no provided descending sort order', () => {
    const sortedValues = sortArrayOfNumbers(randomValues, SortOrder.Descending);

    expect(sortedValues).toEqual(valuesDescending);
  });
});
