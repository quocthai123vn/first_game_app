export const generateRandomNumber = (
  max: number,
  min: number,
  exclude: number
): number => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber !== exclude
    ? randomNumber
    : generateRandomNumber(max, min, exclude);
};
