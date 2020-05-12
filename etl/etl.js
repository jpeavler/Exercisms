//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
  let shiny = {};
  Object.entries(old).forEach(([key, value]) => {
    value.forEach((val) => {
      let low = val.toLowerCase();
      shiny[low] = parseInt(key);
    });
  });
  return shiny;
};
