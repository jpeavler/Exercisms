let useSharps = ['G', 'D', 'A', 'E', 'B', 'F#', 'e', 'b', 'f#', 'c#', 'g#', 'd#', 'a', 'C'];
//let useFlats = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'd', 'g', 'c', 'f', 'bb', 'eb'];
let allNotesWithFlat = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
let allNotesWithSharp = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

export class Scale {
  constructor(tonic) {
    this._tonic = tonic;
  }

  chromatic() {
    let chromeLength = 12;
    let result = [];
    let listToUse = (useSharps.includes(this._tonic)) ? allNotesWithSharp : allNotesWithFlat;
    let startingIndex = listToUse.indexOf(this._tonic);
    for(let i = 0; i < chromeLength; i++) {
      let currentIndex = (i + startingIndex) % chromeLength;
      result.push(listToUse[currentIndex]);
    }
    return result;
  }

  interval(intervals) {
    let chromeLength = 12;
    let intLength = intervals.length;
    let result = [];
    let upperCase = this._tonic[0].toUpperCase() + this._tonic.slice(1);
    let listToUse = (useSharps.includes(this._tonic)) ? allNotesWithSharp : allNotesWithFlat;
    let startingIndex = listToUse.indexOf(upperCase);
    let currentIndex = startingIndex;
    result.push(listToUse[currentIndex]);
    for(let i = 0; i < intLength - 1; i++) {          
        let increment;
        (intervals[i] == "M") ? increment = 2 : (intervals[i] == "m") ? increment = 1 : increment = 3;
        currentIndex = (currentIndex + increment) % chromeLength;
        result.push(listToUse[currentIndex]);
    }
    return result;
  }
}
