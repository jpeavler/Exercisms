//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (string) => {
  let stringArr = string.split(' ');
  let countedWords = stringArr.reduce(function (allWords, word) {
    if(word in allWords) {
      allWords[word]++;
    }else {
      allWords[word] = 1;
    }
    return allWords;
  }, {});
  return countedWords;
};
