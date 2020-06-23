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
            let isHere = true;
            for(let k = 1; k < word.length; k++) {
              if(word[k] != this._grid[i][j+k]) {isHere = false;} //if the next character isn't here, then the word isn't here
            }
            if(isHere){
              coordinates = {"end": [i + 1, j + word.length], "start": [i + 1, j + 1]};
            }
          } if(reversedWord[0] == this._grid[i][j]) { //Checks for words right to left, starting with the last letter
            let isHereB = true;
            for(let l = 1; l < word.length; l++) {
              if(reversedWord[l] != this._grid[i][j+l]) {isHereB = false;}
            }
            if(isHereB) {
              coordinates = {"end": [i + 1, j + 1], "start": [i + 1, j + word.length]}
            }
            console.log("Will elixir coords change?", coordinates);
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
