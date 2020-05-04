//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  static generateRows = (string) => {
    let stringArray = string.split('\n');       //creates an array of strings separated by newline.
    let rowArray = [];
    for(let i = 0; i < stringArray.length; i++){
      rowArray.push(stringArray[i].split(' ')); //separates each number by the space and stores into rowArray
    }
    for(let j = 0; j < rowArray.length; j++){    //changes string numbers into numbers.
      for(let k = 0; k < rowArray[j].length; k++){
        rowArray[j][k] = parseInt(rowArray[j][k]);
      }
    }
    return rowArray;
  }
  static generateCol = (string) => {
    let rowArray = Matrix.generateRows(string);  //start by using the rowArray
    let colArray = [];
    let width = rowArray.length;                 //is width of colArray (height of rowArray)
    let height = rowArray[0] instanceof Array? rowArray[0].length : 0;  //instanceof tells us whether there is an array there to read
    for(let i = 0; i < height; i++){
      colArray[i] = [];
      for(let j = 0; j < width; j++){
        colArray[i][j] = rowArray[j][i];
      }
    }
    return colArray;
  }
  constructor(str) {
    this._rows = Matrix.generateRows(str);
    this._columns = Matrix.generateCol(str);
  }
  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }
}
