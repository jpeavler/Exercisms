//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrase) => {
  let phraseArray = phrase.split(' ');
  let acronym = "";
  phraseArray.forEach(word => {
    acronym = acronym + word[0];
  })
  return acronym.toUpperCase();
};
