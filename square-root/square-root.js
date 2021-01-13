export const squareRoot = (num) => {
  let x = (num + 1)/2;  //x represents our guesses we will take, starting with slightly larger than half the number
  for(let i = 0; i < 10; i++) { //we want to refine our guess ten times. If dealing with a larger number, we need more iterations.
    x = (x + num/x)/2;  //This equation reduces the error by dividing it in half. Each guess becomes closer as the error shrinks.
  }
  return Math.round(x); //If the ten iterations don't get the number close enough, this rounding will.
};
