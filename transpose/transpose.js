//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (arr) => {
  let result = [];
  let numCols = 0;
  let numRows = 0;
  arr.forEach(row => {
    if(row.length > numCols) { numCols = row.length;}
    numRows ++;
  });
  for(let i = 0; i < numCols; i++) {
    let tempString = "";
    for(let j = 0; j < numRows; j++) {
      if(arr[j][i]) {
        tempString = tempString.concat(arr[j][i]);
      } else if(j + 1 != numRows){
        tempString = tempString.concat(" ");
      }
    }
    result.push(tempString);
  }
  return result;
};
