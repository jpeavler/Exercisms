export class ComplexNumber {
  constructor(real, imaginary) {
    this._real = real;
    this._imaginary = imaginary;
  }

  get real() {
    return this._real;
  }

  get imag() {
    return this._imaginary;
  }

  add(complexNum2) {
    return new ComplexNumber(this._real + complexNum2._real, this._imaginary + complexNum2._imaginary);
  }

  sub(complexNum2) {
    return new ComplexNumber(this._real - complexNum2._real, this._imaginary - complexNum2._imaginary);
  }

  div(complexNum2) {
    const realPart = (this._real * complexNum2._real + this._imaginary * complexNum2._imaginary) / 
      (complexNum2._real ** 2 + complexNum2._imaginary ** 2);
    const imaginaryPart = (this._imaginary * complexNum2._real - this._real * complexNum2._imaginary) /
      (complexNum2._real ** 2 + complexNum2._imaginary ** 2);
    return new ComplexNumber(realPart, imaginaryPart);
  }

  mul(complexNum2) {
    const realPart = this._real * complexNum2._real - this._imaginary * complexNum2._imaginary;
    const imaginaryPart = this._imaginary * complexNum2._real + this._real * complexNum2._imaginary;
    return new ComplexNumber(realPart, imaginaryPart);
  }

  get abs() {
    return Math.sqrt(this._real ** 2 + this._imaginary ** 2);
  }

  get conj() {
    const imaginaryPart = this._imaginary === 0 ? 0 : this._imaginary * -1; //-0 exists but is undesired.
    return new ComplexNumber(this._real, imaginaryPart);
  }

  get exp() {
    const realPart = Math.E ** this._real * Math.cos(this._imaginary);
    const imaginaryPart = Math.sin(this._imaginary);
    return new ComplexNumber(realPart, imaginaryPart);
  }
}
