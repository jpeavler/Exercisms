//
// This is only a SKELETON file for the 'Word Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const reverseString = (input) => {
  let forward = input.split("");
  let backward = [];
  while(forward.length > 0){
      backward.push(forward.pop());
  }
  let output = backward.join("");
  return output;
};

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
          let reversedWord = reverseString(word);
          if(word[0] == this._grid[i][j]) {       //Checks for words left to right, starting with the first letter
            let isHereRight = true;
            for(let k = 1; k < word.length; k++) {
              if(word[k] != this._grid[i][j+k]) {isHereRight = false;} //if the next character isn't here, then the word isn't here
            }
            if(isHereRight){
              coordinates = {"end": [i + 1, j + word.length], "start": [i + 1, j + 1]};
            } else {                              //Checks for words top to bottom, starting with the first letter
              let isHereDown = true;
              for(let m = 1; m < word.length; m++) {
                if(this._grid[i + m] == undefined) {isHereDown = false;}  //Prevents error of reading an index of undefined
                else if(word[m] != this._grid[i+m][j]) {isHereDown = false;}
              }
              if(isHereDown) {
                coordinates = {"end": [i + word.length, j + 1], "start": [i + 1, j + 1]};
              }
            }
          } if(reversedWord[0] == this._grid[i][j]) { //Checks for words right to left, starting with the last letter
            let isHereLeft = true;
            for(let l = 1; l < word.length; l++) {
              if(reversedWord[l] != this._grid[i][j+l]) {isHereLeft = false;}
            }
            if(isHereLeft) {
              coordinates = {"end": [i + 1, j + 1], "start": [i + 1, j + word.length]}
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
