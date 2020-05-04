//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let regex = /\s/g;  //selects spaces, which will allow us to remove them
export const isPangram = (str) => {
  let pangram = true;
  let lowerCase = str.toLowerCase().replace(regex, "");
  for(let i = 0; i < alphabet.length; i++){
    if(lowerCase.indexOf(alphabet[i]) === -1){  //if we can't find that letter of the alphabet
      pangram = false;                          //then it isn't a pangram
    }
  }
  return pangram;
};
