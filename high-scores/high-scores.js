//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const findHighest = (list) => {
  let highScore = 0;
  list.forEach((score) => {
    if(highScore < score) {highScore = score;}
  });
  return highScore;
}
export class HighScores {
  constructor(scores) {
    this._scores = scores;
    this._latest = scores[scores.length -1];
    this._personalBest = findHighest(scores);
  }

  get scores() {
    return this._scores;
  }

  get latest() {
    return this._latest;
  }

  get personalBest() {
    return this._personalBest;
  }

  get personalTopThree() {
    throw new Error("Remove this statement and implement this function");
  }
}
