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
const findHighestThree = (list) => {
  let topThree = Object.assign([], list); //Allows me to copy list by value and not by reference
  topThree = topThree.sort((a, b) => b - a);
  while(topThree.length > 3) {
    topThree.pop();
  }
  return topThree;
}
export class HighScores {
  constructor(scores) {
    this._scores = scores;
    this._latest = scores[scores.length -1];
    this._personalBest = findHighest(scores);
    this._personalTopThree = findHighestThree(scores);
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
    return this._personalTopThree;
  }
}
