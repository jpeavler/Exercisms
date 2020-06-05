//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (string) => {
  let lastOpener = []
  for(let i = 0; i < string.length; i++) {
    if(string[i] == "[" || string[i] == "{" || string[i] == "(") {
      lastOpener.push(string[i]);
    } else if(string[i] == "]") {
        if(lastOpener.length == 0) {return false;}
        if(lastOpener.pop() != "[") {return false;}
    } else if(string[i] == "}") {
        if(lastOpener.length == 0) {return false;}
        if(lastOpener.pop() != "{") {return false;}
    } else if(string[i] == ")") {
        if(lastOpener.length == 0) {return false;}
        if(lastOpener.pop() != "(") {return false;}
    }
  }
  if(lastOpener.length == 0) {return true;}
  else {return false;}
};
