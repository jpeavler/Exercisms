//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const rows = (rowCount) => {
  let result = [];
  for(let i = 1; i <= rowCount; i++) {
    let nextRow = [];
    if(i == 1) {
      result.push([1]);
    } else {
      for(let j = 0; j < rowCount; j++) {
        let lastRow = result[(result.length -1)];
        let left = lastRow[j-1];
        let right = lastRow[j];
        if(left == undefined) {left = 0;}
        if(right == undefined) {right = 0;}
        if(!(left == 0 && right == 0)) {nextRow.push(left+right);}
      }
      result.push(nextRow);
    }
  }
  return result;
};
