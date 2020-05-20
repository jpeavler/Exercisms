//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const sumSquares = (num) => {
  let result = 0;
  for(let i = 1; i <= num; i++) {
    result = result + i**2;
  }
  return result;
}
const squareSum = (num) => {
  let result = 0;
  for(let i = 1; i <= num; i++) {
    result = result + i;
  }
  return result**2;
}
export class Squares {
  constructor(num) {
    this._sumOfSquares = sumSquares(num);
    this._squareOfSum = squareSum(num);
    this._difference = this._squareOfSum - this._sumOfSquares;
  }

  get sumOfSquares() {
    return this._sumOfSquares;
  }

  get squareOfSum() {
    return this._squareOfSum;
  }

  get difference() {
    return this._difference;
  }
}
