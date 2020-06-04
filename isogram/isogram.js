//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (phrase) => {
  if(phrase == '') {return true}
  let phraseArray = phrase.toLowerCase().split("");
  let talliedPhrase = phraseArray.reduce((tally, letter) => {
    tally[letter] = (tally[letter] || 0) + 1;
    return tally;
  }, {});
  delete talliedPhrase["-"];
  delete talliedPhrase[" "];
  let countArray = Object.values(talliedPhrase);
  for(let i = 0; i < countArray.length; i++){
    if(countArray[i] > 1) {return false}
  }
  return true;
};
