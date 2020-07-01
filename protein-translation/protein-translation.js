export const translate = (RNA) => {
  if(!RNA) {return [];}
  if(!RNA.length % 3 == 0) {
    throw new Error('Invalid codon');
  }
  let result = [];
  return result;
};
