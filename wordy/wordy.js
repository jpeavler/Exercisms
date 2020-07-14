export const answer = (str) => {
  let numbers = [];
  let operators = [];
  let request = str.split(" ");
  let result;
  if(request[2].match(/[0-9]/)) {
    numbers.push(parseInt(request[2],10));
  } else {
    throw new Error ('Unknown operation');
  }
  let signToPush = request[3] === "plus" ? "+" : request[3] === "minus" ? "-" :
    request[3] === "multiplied" ? "*" : request[3] === "divided" ? "/" : null;
  if(signToPush) {
    operators.push(signToPush);
  }
  if(request.length >= 5) {
    if(request[4].match(/[0-9]/)) {
      numbers.push(parseInt(request[4],10));
    } else if(request[4] === "by" && request[5].match(/[0-9]/)
      && (request[3] === "multiplied" || request[3] === "divided") ) {
        numbers.push(parseInt(request[5],10));
    } else {
      throw new Error ('Unknown operation');
    }
  }
  if(numbers.length === 1 && operators.length === 0) {
    result = numbers[0];
  } else if(numbers.length === 2 && operators.length === 1) {
    result = operators[0] === "+" ? numbers[0] + numbers[1] : operators[0] === "-" ?
      numbers[0] - numbers[1] : operators[0] === "*" ? numbers[0] * numbers[1] : 
      numbers[0] / numbers[1];
  }
  return result;
};
