export const calculatePercentage = (value: number, maxValue: number): number => {
  const percentage = (value * 100) / maxValue;
  return parseFloat((percentage).toFixed(2));
};
