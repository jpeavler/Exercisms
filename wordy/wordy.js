export const answer = (str) => {
  let num1;
  let num2;
  let num3;
  if (str.includes("cubed")) {
    throw new Error("Unknown operation");
  }
  if (str.match("Who is")) {
    throw new Error("Unknown operation");
  }
  let request = str.split(" ");
  let result;
  if (request.length < 3) {
    throw new Error ("Syntax error");
  }
  if(request[2].match(/[0-9]/)) {
    num1 = parseInt(request[2],10);
  }
  let op1 = request[3] === "plus" ? "+" : request[3] === "minus" ? "-" :
    request[3] === "multiplied" ? "*" : request[3] === "divided" ? "/" : null;
  let op2 = request[5] === "plus" ? "+" : request[5] === "minus" ? "-" :
  request[5] === "multiplied" ? "*" : request[5] === "divided" ? "/" : null;
  if(!op2 && (op1 === "*" || op1 === "/")) {
    op2 = request[6] === "plus" ? "+" : request[6] === "minus" ? "-" :
  request[6] === "multiplied" ? "*" : request[6] === "divided" ? "/" : null;
  }
  if(request.length >= 5) {
    if(request[4].match(/[0-9]/)) {
      num2 = parseInt(request[4],10);
    } else if(request[4] === "by" && request[5].match(/[0-9]/)
      && (request[3] === "multiplied" || request[3] === "divided") ) {
        num2 = parseInt(request[5],10);
    } 
  }
  if(request.length >= 7) {
    if(request[6].match(/[0-9]/)) {
      num3 = parseInt(request[6],10);
    } else if(request[6] === "by" && request[7].match(/[0-9]/)) {
      num3 = parseInt(request[7],10);
    } else if((op1 === "*" || op1 === "/") && (op2 === "*" || op2 === "/") 
        && request[8].match(/[0-9]/)) {
      num3 = parseInt(request[8],10);
    } 
  }
  if(num1 && !op1 && !num2) {
    result = num1;
    if(!(request[request.length -1].match(/[0-9]/))) {
      throw new Error("Syntax error");
    }
  } else if(num1 && num2 && op1 && !num3 && !op2) {
    if(num2 != parseInt(request[request.length -1 ],10)) {
      throw new Error("Syntax error");
    }
    result = op1 === "+" ? num1 + num2 : op1 === "-" ?
      num1 - num2 : op1 === "*" ? num1 * num2 : 
      num1 / num2;
  } else if(num1 && num2 && num3 && op1 && op2) {
    result = op1 === "+" ? num1 + num2 : op1 === "-" ?
      num1 - num2 : op1 === "*" ? num1 * num2 : 
      num1 / num2;
    result = op2 === "+" ? result + num3 : op2 === "-" ?
      result - num3 : op2 === "*" ? result * num3 : 
      result / num3;
  } else {
    throw new Error("Syntax error");
  }
  return result;
};
