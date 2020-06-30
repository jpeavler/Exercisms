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

  slices(chunkSizes) {
    throw new Error("Remove this statement and implement this function");
  }
}
