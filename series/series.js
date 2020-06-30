//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(digits) {
    this._digits = digits.split("").map(function(num) {
      return parseInt(num,10);
    });
  }

  get digits() {
    return this._digits;
  }

  slices(sliceSize) {
    if(sliceSize > this._digits.length) {
      throw new Error("Slice size is too big.");
    }
    let result = [];
    let slicedLength = this._digits.length - sliceSize + 1;
    for(let i = 0; i < slicedLength; i++){
      let subArray = [];
      for(let j = 0; j < sliceSize; j++) {
        subArray.push(this._digits[i+j]);
      }
      result.push(subArray);
    }
    return result;
  }
}
