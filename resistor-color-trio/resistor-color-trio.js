//helper array to match each color with its decimal value using the index.
const decodeArray = ['black', 'brown', 'red', 'orange', 'yellow',
'green', 'blue', 'violet', 'grey', 'white'];

//Class ResistorColorTrio
//constructor param trio: an array of strings containing three colors. Valid colors are in decodeArray above.
//class method label(): returns the label describing the resistor's value.
export class ResistorColorTrio {
  constructor(trio) {
    if(decodeArray.indexOf(trio[0]) === -1 || decodeArray.indexOf(trio[1]) === -1 || decodeArray.indexOf(trio[2]) === -1) {
      throw /invalid color/;  //If an invalid color is given, throw an error
    }
    //Calculate the value of the resistor. Multiply first color by 10 and add second color. Then raise 10 to the power of the sum.
    this.value = (decodeArray.indexOf(trio[0]) * 10 + decodeArray.indexOf(trio[1])) * Math.pow(10, decodeArray.indexOf(trio[2]));
    this.unit = "ohms";
    if(this.value >= 1000) {  //If the number would be easier to read in kiloohms, convert the value into that unit.
      this.value = this.value / 1000;
      this.unit = "kiloohms";
    }
    this.label = `Resistor value: ${this.value} ${this.unit}`;
  }

  label() {
    return this.label;
  }
}
