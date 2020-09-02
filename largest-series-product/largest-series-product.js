export const largestProduct = (num, span) => {
  if(span === 0) {return 1}
  if(num.match(/\D/)) {throw new Error("Digits input must only contain digits")}
  if(span < 0) {throw new Error('Span must be greater than zero')}
  if(num.length < span) {throw new Error("Span must be smaller than string length")}
  let result = 1;
  for(let i = 0; i <= num.length - span; i++) {
    let tempResult = 1;
    for(let j = i; j < i + span; j++) {
      tempResult *= parseInt(num[j]);
    }
    if(tempResult > result) {
      result = tempResult;
    }
  }
  return result;
};
