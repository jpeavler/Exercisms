//
// This is only a SKELETON file for the 'Word Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class WordSearch {
  constructor(grid) {
    this._grid = grid;
  }

  find(findList) {
    let result = {};
    findList.forEach((word) => {
      let coordinates;
      for(let i = 0; i < this._grid.length; i++) {
        for(let j = 0; j < this._grid[i].length; j++) {
          if(word[0] == this._grid[i][j]) {
            let checkRight = this._grid[i];
            if(checkRight.includes(word)){
              coordinates = {"end": [i + 1, j + word.length], "start": [i + 1, j + 1]};
            } else {
              let checkLeft;
            }
          }
        }
      }
      result[word] = coordinates;
      console.log(result);
    });
    return result;
  }
}

export default WordSearch;
