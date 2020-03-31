//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = ([color1, color2]) => {
  const decodeArray = ['black', 'brown', 'red', 'orange', 'yellow',
  'green', 'blue', 'violet', 'grey', 'white'];
 
  let code1 = 0;
  let code2 = 0;
 
  for(let i = 0; i < decodeArray.length; i++){
    if(color1 == decodeArray[i]){
        code1 = i;
    }
    if(color2 == decodeArray[i]){
        code2 = i;
    }
  }
  return parseInt("" +code1 +code2);
};
