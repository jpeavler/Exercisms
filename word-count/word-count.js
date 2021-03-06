//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (string) => {
  let lettersAndNums = string.replace(/[#.:&@$%^!]/g, '');  //removes several non alphanumerics from input
  let noQuotes = lettersAndNums.replace(/\s'|'\s/g, ' ');   //removes single quotation marks without removing apostrophe
  if(noQuotes.charAt((noQuotes.length - 1)) == "\'")        //removes single quotation if at end of string
  {
    noQuotes = noQuotes.slice(0, (noQuotes.length -1));
  }
  let stringArr = noQuotes.toLowerCase().split(/[\s\,]/);   //splits input into an array
  let removedBlanks = stringArr.filter(function (el) {      //removes all blank values in array
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
