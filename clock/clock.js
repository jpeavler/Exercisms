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

  plus(min) {
    let minAdd = min + this.min;
    let hrAdd = this.hr;
    while(minAdd >= 60) {
      minAdd -= 60;
      hrAdd ++;
    }
    hrAdd = hrAdd % 24;
    return new Clock(hrAdd, minAdd);
  }

  minus(min) {
    let minSub = this.min - min;
    let hrSub = this.hr;
    while(minSub < 0) {
      minSub += 60;
      hrSub --;
    }
    while(hrSub < 0) {
      hrSub += 24;
    }
    return new Clock(hrSub, minSub);
  }

  equals() {
    throw new Error('Remove this statement and implement this function');
  }
}
