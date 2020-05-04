//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const gigasec = 10**9;
export const gigasecond = (momentGiven) => {
  return new Date(momentGiven.getTime() + gigasec * 1000);
};
