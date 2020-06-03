//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, wordList) => {
  let anagramList = wordList.filter((currentWord) => {
    if(currentWord.length != word.length) {return false}
    let wordArray = word.split("");
    wordArray.forEach((letter) => {
      if()
    })
    return true //Need to add extra conditions
  })
}
