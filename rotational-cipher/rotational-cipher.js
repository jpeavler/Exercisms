const alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

export class RotationalCipher {
  static rotate(input, key) {
    let result = "";
    for(let i = 0; i < input.length; i++) {
      if(input[i].match(/[A-Z]/g)) {
        let oldIndex = alpha.indexOf(input[i].toLowerCase());
        result = result.concat(alpha[(oldIndex + key) % 26].toUpperCase());
      } else if(input[i].match(/[a-z]/g)) {
        let oldIndex = alpha.indexOf(input[i]);
        result = result.concat(alpha[(oldIndex + key) % 26])
      } else {
        result = result.concat(input[i]);
      }
    }
    return result;
  }
}
