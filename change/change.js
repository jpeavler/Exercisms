export class Change {
  calculate(coinArray, target) {
    if(target < 0) {
      throw new Error("Negative totals are not allowed.");
    }
    //Initialize matrix with a list of zero coins needed to make 0
    let matrix = { 0 : [] };  
    /* This for loop will generate the remaining matrix, which 
    will list the mininum coins to reach a certain subtarget i,
    including the final target. By finding each subtarget's best
    path, we will find the target's best path.*/
    for(let i = 1; i <= target; i++) {
      //The filter is used to list all usable coins
      let maybeChange = coinArray.filter(coin => matrix[i - coin])
      /*The map creates all possible coin combinations needed to reach subtarget i.
      Each coin left from the filter is combined with the ideal coin combo to reach
      the subtarget i-coin.*/
        .map(coin => [coin, ...matrix[i - coin]]);
      matrix[i] = (maybeChange.length === 0) ?
      undefined //If there are no possible combinations, we will list that subtarget as undefined in the matrix
      //Reduce removes all paths with lengths greater or equal 
      : maybeChange.reduce((oldBest, possibleMin) => (possibleMin.length < oldBest.length) ? possibleMin : oldBest);
    }
    if (!matrix[target]) {
      throw new Error(`The total ${target} cannot be represented in the given currency.`);
    }
    return matrix[target];
  }
}

