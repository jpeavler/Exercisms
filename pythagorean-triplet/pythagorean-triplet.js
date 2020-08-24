export class Triplet {
  constructor(x, y, z) {
    this._x = x;
    this._y = y;
    this._z = z;
  }

  sum() {
    return this._x + this._y + this._z;
  }

  product() {
    return this._x * this._y * this._z;
  }

  isPythagorean() {
    if(this._x ** 2 + this._y ** 2 == this._z ** 2 && this._x < this._y && this._y < this._z) {
      return true;
    } else {
      return false;
    }
  }

  static where(constraints) {
    let allTrips = [];
    const {maxFactor, minFactor = 3, sum} = constraints;
    for(let i = minFactor; i <= maxFactor; i++) {
      for(let j = i + 1; j <= maxFactor; j++) {
        let k = Math.sqrt(i**2 + j**2);
        if(Number.isInteger(k) && k <= maxFactor) {
          let myTrip = new Triplet(i,j,k);
          if((sum && myTrip.sum() == sum) || !sum) {
            allTrips.push(myTrip);
          }
        }
      }
    }
    return allTrips;
  }
}
