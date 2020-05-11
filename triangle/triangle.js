//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(x,y,z) {
    this.sideX = x;
    this.sideY = y;
    this.sideZ = z;
  }

  isEquilateral() {
    let equil;
    if(this.sideX == this.sideY && this.sideX == this.sideZ && this.sideX != 0){
      equil = true;
    }else{
      equil = false;
    }
    return equil;
  }

  isIsosceles() {     //note: this exercise is allowing an Equilateral triangle to count as an Isosceles as well.
    let isIso;
    if((this.sideX == this.sideY 
        || this.sideX == this.sideZ 
        || this.sideY == this.sideZ)
        && this.sideX != 0
        && this.sideY != 0
        && this.sideZ != 0){
          if(this.sideX + this.sideY >= this.sideZ
            && this.sideY + this.sideZ >= this.sideX
            && this.sideX + this.sideZ >= this.sideY){
            isIso = true;
          }else {
            isIso = false;
          }
    }else{
      isIso = false;
    }
    return isIso;
  }

  isScalene() {
    let isScale;
    if(this.sideX == this.sideY 
      || this.sideY == this.sideZ
      || this.sideZ == this.sideX) {
        isScale = false;
    }else{
      if(this.sideX + this.sideY >= this.sideZ
        && this.sideY + this.sideZ >= this.sideX
        && this.sideX + this.sideZ >= this.sideY){
          isScale = true;
        }else{
          isScale = false;
        }
    }
    return isScale;
  }
}
