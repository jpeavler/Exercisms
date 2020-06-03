//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const findFactors = (num) => {    //efficiently finds all factors of a number. O(sqrt(N)).
  let factorList = [];
  for (let i = 1; i*i < num; i++) {
    if(num % i == 0) {
      factorList.push(i);
      if(num/i != i) {factorList.push(num/i);}
    }
  }
  return factorList;
}

export const classify = (num) => {
  if(num < 1) { throw new Error("Classification is only possible for natural numbers.") }
  let sum = 0;
  let factorList = findFactors(num);
  factorList.forEach(x => sum = sum + x);
  sum = sum - num;        //need to remove the number itself from the list
  let result;
  if(sum == num) { result = 'perfect'}
  else if(sum > num) { result = 'abundant'}
  else { result = 'deficient'}
  return result;
};
