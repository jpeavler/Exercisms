//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (phoneNumber) => {
  let numbersOnly = phoneNumber.replace(/\D/g, "");
  console.log(numbersOnly);
  return numbersOnly;
};
