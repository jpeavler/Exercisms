//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (string) => {
  let brackets = 0;
  let braces = 0;
  let para = 0;
  let lastOpener = []
  for(let i = 0; i < string.length; i++) {
    if(string[i] == "[") {
      brackets++;
      lastOpener.push(string[i]);
    }
    else if(string[i] == "{") {
      braces++;
      lastOpener.push(string[i]);
    }
    else if(string[i] == "(") {
      para++;
      lastOpener.push(string[i]);
    }
    else if(string[i] == "]") {
        brackets--;
        if(brackets < 0) {return false;}
        if(lastOpener.pop() != "[") {return false;}
    } else if(string[i] == "}") {
        braces--;
        if(braces < 0) {return false;}
        if(lastOpener.pop() != "{") {return false;}
    } else if(string[i] == ")") {
        para--;
        if(para < 0) {return false;}
        if(lastOpener.pop() != "(") {return false;}
    }
  }
  if(brackets == 0 && braces == 0 && para == 0) {return true;}
  else {return false;}
};
