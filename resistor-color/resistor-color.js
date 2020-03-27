//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const resArray = ['black', 'brown', 'red', 'orange', 'yellow',
'green', 'blue', 'violet', 'grey', 'white'];
export const colorCode = (color) => {
  for(let i = 0; i < resArray.length; i++)
  {
    if(color == resArray[i]){
      return i;
    }
  }
};

export const COLORS = resArray;
