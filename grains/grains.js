export const square = (numSquare) => {
  if(numSquare < 1 || numSquare > 64) {
    throw new Error("square must be between 1 and 64");
  }
  return 2n ** BigInt(numSquare - 1);
};

export const total = () => {
  return (2n ** 64n) - 1n;
};
