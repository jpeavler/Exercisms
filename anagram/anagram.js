//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, wordList) => {
  let anagramList = wordList.filter((currentWord) => {
    if(currentWord.length != word.length) {return false}
    if(currentWord.toLowerCase() == word.toLowerCase()) {return false}
    let wordArray = word.toLowerCase().split("").sort();
    let currentArray = currentWord.toLowerCase().split("").sort();
    for(let i = 0; i < word.length; i ++) {
      if(wordArray[i] != currentArray[i]) {return false}
    }
    return true //Need to add extra conditions
  });
  return anagramList;
}
