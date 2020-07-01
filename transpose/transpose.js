export const transpose = (arr) => {
  let result = [];
  let numCols = 0;  //Represents the number of columns the input has. Will become the number of Rows after Transpose
  let numRows = 0;  //Represents the number of Rows the input has. Will become the number of Columns after Transpose
  arr.forEach(row => {    //Allows me to find the longest row length (which will transpose to longest column)
    if(row.length > numCols) { numCols = row.length;}
    numRows ++;           //Tracks the number of Rows in the original array
  });
  for(let i = 0; i < numCols; i++) {
    let tempString = "";  //a place to store each new row
    for(let j = 0; j < numRows; j++) {
      if(arr[j][i]) {
        tempString = tempString.concat(arr[j][i]);
      } else{
        tempString = tempString.concat(" ");  //creates left and right padding. The right padding will be removed on line 21.
      }
    }
    result.push(tempString);
  }
  if(result[numCols-1]) {                                    //This last bit trims off the right side padding in the last Row
    result[numCols-1] = result[numCols-1].replace(/\s*$/,"");
  }
  return result;
};
