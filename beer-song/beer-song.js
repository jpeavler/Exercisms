export const recite = (initialBottlesCount, takeDownCount) => {
  let result = [];
  let currentBottle = initialBottlesCount;
  for(let i = 0; i < takeDownCount; i++) {
    if(currentBottle === 2) {
      result.push(`${currentBottle} bottles of beer on the wall, ${currentBottle} bottles of beer.`);
      currentBottle--;
      result.push(`Take one down and pass it around, ${currentBottle} bottle of beer on the wall.`);
    } else if(currentBottle === 1) {
      result.push(`${currentBottle} bottle of beer on the wall, ${currentBottle} bottle of beer.`);
      currentBottle--;
      result.push(`Take it down and pass it around, no more bottles of beer on the wall.`);
    } else if (currentBottle === 0) {
      result.push(`No more bottles of beer on the wall, no more bottles of beer.`);
      currentBottle--;
      result.push(`Go to the store and buy some more, 99 bottles of beer on the wall.`);
    } else {
      result.push(`${currentBottle} bottles of beer on the wall, ${currentBottle} bottles of beer.`);
      currentBottle--;
      result.push(`Take one down and pass it around, ${currentBottle} bottles of beer on the wall.`);
    }
    if(i + 1 !== takeDownCount) {
      result.push("");
    }
  }
  return result;
};
