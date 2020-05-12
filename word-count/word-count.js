//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (string) => {
  let stringArr = string.split(/[\s\,]/); //splits input into an array
  let removedBlanks = stringArr.filter(function (el) {  //removes all blank values in array
    return el != "";
  });
  let countedWords = removedBlanks.reduce(function (allWords, word) { //creates object that counts freqency of
    if(word in allWords) {                                            //each word
      allWords[word]++;
    }else {
      allWords[word] = 1;
    }
    return allWords;
  }, {});
  return countedWords;
};
