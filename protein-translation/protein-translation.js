export const translate = (RNA) => {
  if(!RNA) {return [];}
  if(!(RNA.length % 3 == 0)) {
    throw new Error('Invalid codon');
  }
  let result = [];
  for(let i = 0; i < RNA.length; i= i+3) {
    let currentCodon = RNA[i].concat(RNA[i+1], RNA[i+2]);
    if(currentCodon == "AUG") {result.push('Methionine')}
  }
  return result;
};
