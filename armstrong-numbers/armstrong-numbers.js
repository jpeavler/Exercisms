export const isArmstrongNumber = (num) => {
  let str = num.toString();
  let armSum = 0;
  for(let i = 0; i < str.length; i++) {
    armSum = armSum + (parseInt(str[i]))**str.length;
  }
  if(armSum == num) {return true;}
  else {return false;}
};
