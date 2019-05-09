export enum SortOrder {
  Ascending,
  Descending,
}

/**
 *
 * @param values Sort array of numbers
 * @param sortOrder
 */
export const sortArrayOfNumbers = (values: number[], sortOrder = SortOrder.Ascending) => values.sort((valueA, valueB) => {
  if (valueA === valueB) {
    return 0;
  }

  return sortOrder === SortOrder.Descending
    ? valueA > valueB ? -1 : 1
    : valueA > valueB ? 1 : -1;
});
