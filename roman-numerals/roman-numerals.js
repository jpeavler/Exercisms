export const toRoman = (num) => {
  let myNum = num;
  let result = "";
  while(myNum >= 1000) {
    result = result.concat("M");
    myNum = myNum - 1000;
  }
  if(myNum >= 900) {
    result = result.concat("CM");
    myNum = myNum - 900;
  }
  while(myNum >= 500) {
    result = result.concat("D");
    myNum = myNum - 500;
  }
  if(myNum >= 400) {
    result = result.concat("CD");
    myNum = myNum - 400;
  }
  while(myNum >= 100) {
    result = result.concat("C");
    myNum = myNum - 100;
  }
  if(myNum >= 90) {
    result = result.concat("XC");
    myNum = myNum - 90;
  }
  while(myNum >= 50) {
    result = result.concat("L");
    myNum = myNum - 50;
  }
  if(myNum >= 40) {
    result = result.concat("XL");
    myNum = myNum - 40;
  }
  while(myNum >= 10) {
    result = result.concat("X");
    myNum = myNum - 10;
  }
  if(myNum == 9) {
    result = result.concat("IX");
    myNum = myNum - 9;
  }
  while(myNum >= 5) {
    result = result.concat("V");
    myNum = myNum - 5;
  }
  if(myNum == 4) {
    result = result.concat("IV");
    myNum = myNum - 4;
  }
  while(myNum > 0) {
    result = result.concat("I");
    myNum = myNum - 1;
  }
  return result;
};
