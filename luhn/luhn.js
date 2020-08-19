export const valid = (str) => {
  if(str.match(/[^0-9|\s]/)) {
    return false;
  }
  let noSpace = str.replace(/ /gi, "");
  if(noSpace.length <= 1) {
    return false;
  }
  let luhnArr = noSpace.split("");
  for(let j = 0; j < luhnArr.length; j++) {
    luhnArr[j] = parseInt(luhnArr[j], 10); 
  }
  for(let i = luhnArr.length - 2; i >= 0; i -= 2) {
    luhnArr[i] = luhnArr[i] * 2;
    if(luhnArr[i] > 9) {
      luhnArr[i] = luhnArr[i] - 9;
    }
  }
  let sum = luhnArr.reduce((total = 0, num) => total + num);
  if(sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
};
