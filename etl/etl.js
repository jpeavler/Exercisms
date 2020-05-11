//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
  let shiny = {};
  Object.entries(old).forEach(([key, value]) => {
    console.log(`${key}, ${value}`);
    let low = value[0].toLowerCase();
    shiny[low] = parseInt(key);
  });
  return shiny;
};
