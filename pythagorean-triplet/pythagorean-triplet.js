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

  static where() {
    throw new Error("Remove this statement and implement this function");
  }
}
