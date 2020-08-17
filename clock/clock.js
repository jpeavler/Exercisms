//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hour, min) {
    this.hr = hour;
    this.min = min;
    while(this.min >= 60) {
      this.min -= 60;
      this.hr ++;
    }
    while(this.min < 0) {
      this.min += 60;
      this.hr --;
    }
    while(this.hr < 0) {
      this.hr += 24;
    }
    this.hr = this.hr % 24;
  }

  toString() {
    let strHr;
    let strMin;
    if(!this.min) {
      strMin = "00";
    } else if (this.min.toString().length < 2) {
      strMin = "0".concat(this.min);
    } else {
      strMin = this.min.toString();
    }
    if(this.hr < 10 && this.hr >= 0) {
      strHr = "0" + this.hr.toString()
    } else if (this.hr == 12 || this.hr == 24) {
      strHr = "00";
    } else {
      strHr = this.hr.toString();
    }
    return strHr.concat(":", strMin);
  }

  plus() {
    throw new Error('Remove this statement and implement this function');
  }

  minus() {
    throw new Error('Remove this statement and implement this function');
  }

  equals() {
    throw new Error('Remove this statement and implement this function');
  }
}
