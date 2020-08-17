//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (num) => {
  let binary = num.toString(2);
  let result = [];
  while(binary.length < 5) {
    binary = "0" + binary;
  }
  if(binary[4] == "1") {
    result.push("wink");
  }
  if(binary[3] == "1") {
    result.push("double blink");
  }
  if(binary[2] == "1") {
    result.push("close your eyes");
  }
  if(binary[1] == "1") {
    result.push("jump");
  }
  if(binary[0] == "1") {
    result = result.reverse()
  }
  return result;
};
