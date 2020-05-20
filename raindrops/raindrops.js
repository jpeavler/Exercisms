//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (num) => {
  let output = "";
  if(num % 3 == 0) {
    output = output + "Pling"
  }
  if(num % 5 == 0) {
    output = output + "Plang"
  }
  if(num % 7 == 0) {
    output = output + "Plong"
  }
  if(output == "") {
    output = num.toString();
  }
  return output;
};
