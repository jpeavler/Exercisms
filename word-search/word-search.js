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
              } else {                            //Checks for words from top left to bottom right
                let isHereDownRight = true;
                for(let o = 1; o < word.length; o++) {
                  if(this._grid[i + o] == undefined) {isHereDownRight = false;}
                  else if(word[o] != this._grid[i+o][j+o]) {isHereDownRight = false;}
                }
                if(isHereDownRight) {
                  coordinates = {"end": [i + word.length, j + word.length], "start": [i + 1, j + 1]}
                } else {                          //Checks for words from top right to bottom left
                  let isHereDownLeft = true;
                  for(let r = 1; r < word.length; r++) {
                    if(this._grid[i + r] == undefined) {isHereDownLeft = false;}
                    else if(word[r] != this._grid[i+r][j -r]) {isHereDownLeft = false;}
                  }
                  if(isHereDownLeft) {
                    coordinates = {"end": [i + word.length, j - word.length + 2], "start": [i + 1, j + 1]}
                  }
                }
              }
            }
          } if(reversedWord[0] == this._grid[i][j]) { //Checks for words right to left using the last letter
            let isHereLeft = true;
            for(let l = 1; l < word.length; l++) {
              if(reversedWord[l] != this._grid[i][j+l]) {isHereLeft = false;}
            }
            if(isHereLeft) {
              coordinates = {"end": [i + 1, j + 1], "start": [i + 1, j + word.length]}
            } else {                                  //Checks for words bottom to top using the last letter
              let isHereUp = true;
              for(let n = 1; n < word.length; n++) {
                if(this._grid[i + n] == undefined) {isHereUp = false;}
                else if(reversedWord[n] != this._grid[i+n][j]) {isHereUp = false;}
              }
              if(isHereUp) {
                coordinates = {"end": [i + 1, j + 1], "start": [i + word.length, j + 1]}
              } else {                                //Checks for words from bottom right to top left
                let isHereUpLeft = true;
                for(let p = 1; p < word.length; p++) {
                  if(this._grid[i + p] == undefined) {isHereUpLeft = false;}
                  else if(reversedWord[p] != this._grid[i+p][j+p]) {isHereUpLeft = false;}
                }
                if(isHereUpLeft) {
                  coordinates = {"end": [i + 1, j + 1], "start": [i + word.length, j + word.length]}
                }else {                             //Checks for words from bottom left to top right
                  let isHereUpRight = true;
                  for(let q = 1; q < word.length; q++) {
                    if(this._grid[i + q] == undefined) {isHereUpRight = false;}
                    else if(reversedWord[q] != this._grid[i+q][j-q]) {isHereUpRight = false;}
                  }
                  if(isHereUpRight) {
                    coordinates = {"end": [i + 1, j + 1], "start": [i + word.length, j - word.length + 2]}
                  }
                }
              }
            }
          }
        }
      }
      result[word] = coordinates;
    });
    return result;
  }
}

export default WordSearch;
