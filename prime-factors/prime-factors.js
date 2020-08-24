export const primeFactors = (num) => {
  let result = [];
  let divider = 2;
  while(num > 1) {
    if(Number.isInteger(num / divider)) {
      num = num / divider;
      result.push(divider);
    } else {
      divider++;
    }
  }
  return result;
};
