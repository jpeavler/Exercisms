//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (strandA, strandB) => {
  let hamDistance = 0;
  if(strandA.length == 0 && !(strandB.length == 0)) {
    throw new Error("left strand must not be empty");
  } else if(!(strandA.length == 0) && strandB.length == 0) {
    throw new Error("right strand must not be empty");
  } else if(strandA.length != strandB.length) {
    throw new Error("left and right strands must be of equal length")
  } else {
    for(let i = 0; i < strandA.length; i++) {
      if(strandA[i] != strandB[i]) {
        hamDistance++;
      }
    }
  }
  return hamDistance;
};
