export const square = (numSquare) => {
  if(numSquare < 1 || numSquare > 64) {
    throw new Error("square must be between 1 and 64");
  }
  let result = 1n;
  for (let i = 2; i <= numSquare; i++) {
    result = result * 2n;
  }
  return result;
};

export const total = () => {
  let result = 0n;
  for (let i = 1; i <= 64; i++) {
    result = result + square(i);
  }
  return result;
};
