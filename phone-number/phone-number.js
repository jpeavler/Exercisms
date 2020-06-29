//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (phoneNumber) => {
  let numbersOnly = phoneNumber.replace(/\D/g, "");
  if(numbersOnly.length < 10) {
    throw new Error('Incorrect number of digits');
  } else if(numbersOnly.length > 11) {
    throw new Error('More than 11 digits');
  } else if(numbersOnly.length == 11 && numbersOnly[0] != 1) {
    throw new Error('11 digits must start with 1');
  } else {
    numbersOnly = numbersOnly.replace("1", "");
  }
  return numbersOnly;
};
