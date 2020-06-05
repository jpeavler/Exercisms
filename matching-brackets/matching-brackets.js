//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (string) => {
  let brackets = 0;
  let braces = 0;
  let para = 0;
  for(let i = 0; i < string.length; i++) {
    if(string[i] == "[") {brackets++;}
    else if(string[i] == "{") {braces++;}
    else if(string[i] == "(") {para++;}
    else if(string[i] == "]") {
        brackets--;
        if(brackets < 0) {return false;}
    } else if(string[i] == "}") {
        braces--;
        if(braces < 0) {return false;}
    } else if(string[i] == ")") {
        para--;
        if(para < 0) {return false;}
    }
  }
  if(brackets == 0 && braces == 0 && para == 0) {return true;}
  else {return false;}
};
