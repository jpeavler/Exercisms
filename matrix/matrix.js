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
    console.log(rowArray);
    return rowArray;
  }
  static generateCol = (string) => {
    let rowArray = Matrix.generateRows(string);  //start by using the rowArray
    let colArray = [];
    for(let i; i < rowArray.length; i++){
      for(let j; j < rowArray[i].length; j++){
        
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
