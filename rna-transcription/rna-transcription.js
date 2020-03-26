//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (input) => {
  let output =""; 
  let dNArray = [];
  dNArray =input.split("");  //heh heh! Get it?!
  let rNArray = [];   

  for(let i = 0; i < dNArray.length; i++){
    switch (dNArray[i]){
        case '':
          //output = '';
          rNArray.push('');
          break; 
        case 'C':
          //output = 'G';
          rNArray.push('G');
          break;
        case 'G':
          //output = 'C';
          rNArray.push('C');
          break;
        case 'T':
          output = 'A';
          rNArray.push('A');
          break; 
        case 'A':
          output = 'U';
          rNArray.push('U');
          break;
    }
  }
  output = rNArray.join('');
  return output;
};
