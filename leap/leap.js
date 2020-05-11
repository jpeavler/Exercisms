//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
  const divByFour = (year % 4 == 0);
  const divByHundred = (year % 100 == 0);
  const divByFourHundred = (year % 400 == 0);
  let leap;
  if (divByFour){
    if(divByHundred){
      if(divByFourHundred){
        leap = true;
      }else{
        leap = false;
      }
    }else {
      leap = true;
    }
  }else {
    leap = false;
  }
  return leap;
};
