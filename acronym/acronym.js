//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrase) => {
  let regex = /_/g;
  let regex2 = /-\b/g;
  let phraseArray = phrase.replace(regex, "").replace(regex2, " ").split(' ');
  let acronym = "";
  phraseArray.forEach(word => {
    if(/[a-zA-Z]/.test(word[0])) {acronym = acronym + word[0];}
  })
  return acronym.toUpperCase();
};
