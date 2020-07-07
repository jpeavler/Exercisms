export const translate = (RNA) => {
  if(!RNA) {return [];}
  if(!(RNA.length % 3 == 0)) {
    throw new Error('Invalid codon');
  }
  let result = [];
  for(let i = 0; i < RNA.length; i= i+3) {
    let currentCodon = RNA[i].concat(RNA[i+1], RNA[i+2]);
    if(currentCodon == "AUG") {result.push("Methionine");}
    else if(currentCodon == "UUU" || currentCodon == "UUC") {result.push("Phenylalanine");}
    else if(currentCodon == "UUA" || currentCodon == "UUG") {result.push("Leucine");}
    else if(currentCodon == "UCU" || currentCodon == "UCC"
         || currentCodon == "UCA" || currentCodon == "UCG") {result.push("Serine");}
    else if(currentCodon == "UAU" || currentCodon == "UAC") {result.push("Tyrosine");}
    else if(currentCodon == "UGU" || currentCodon == "UGC") {result.push("Cysteine");}
    else if(currentCodon == "UGG") {result.push("Tryptophan");}
  }
  return result;
};
