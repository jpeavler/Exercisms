let useSharps = ['G', 'D', 'A', 'E', 'B', 'F#', 'e', 'b', 'f#', 'c#', 'g#', 'd#'];
let useFlats = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'd', 'g', 'c', 'f', 'bb', 'eb'];
// C is the only major scale without sharps or flats
// a is the only minor scale without sharps or flats
let allNotesWithFlat = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
let allNotesWithSharp = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

export class Scale {
  constructor(tonic) {
    this._tonic = tonic;
  }

  chromatic() {
    let chromeLength = 12;
    let result = [];
    if(useSharps.includes(this._tonic) || this._tonic == 'C'){
      let startingIndex = allNotesWithSharp.indexOf(this._tonic);
      for(let i = 0; i < chromeLength; i++) {
        let currentIndex = (i + startingIndex) % chromeLength;
        result.push(allNotesWithSharp[currentIndex]);
      }
    } else {
      let startingIndex = allNotesWithFlat.indexOf(this._tonic);
      for(let i = 0; i < chromeLength; i++) {
        let currentIndex = (i + startingIndex) % chromeLength;
        result.push(allNotesWithFlat[currentIndex]);
      }
    }
    return result;
  }

  interval(intervals) {
    let chromeLength = 12;
    let intLength = intervals.length;
    let result = [];
    if(useSharps.includes(this._tonic) || this._tonic == 'C') {
      let startingIndex = allNotesWithSharp.indexOf(this._tonic);
      let currentIndex = startingIndex;
      result.push(allNotesWithSharp[currentIndex]);
      for(let i = 0; i < intLength - 1; i++) {          
          let increment;
          (intervals[i] == "M") ? increment = 2 : increment = 1;
          currentIndex = (currentIndex + increment) % chromeLength;
          result.push(allNotesWithSharp[currentIndex]);
      }
    } else {
      let startingIndex = allNotesWithFlat.indexOf(this._tonic);
      let currentIndex = startingIndex;
      result.push(allNotesWithFlat[currentIndex]);
      for(let i = 0; i < intLength - 1; i++) {
        let increment;
        (intervals[i] == "M") ? increment = 2 : increment = 1;
        currentIndex = (currentIndex + increment) % chromeLength;
        result.push(allNotesWithFlat[currentIndex]);
      }
    }
    return result;
  }
}
