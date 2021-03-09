const identifyNum = (ocrByRow) => {
  if(ocrByRow[0] === " _ " && ocrByRow[1] === "| |" && ocrByRow[2] === "|_|") {
    return "0";
  } else if( ocrByRow[0] === "   " && ocrByRow[1] === "  |" && ocrByRow[2] === "  |") {
    return "1";
  } else if( ocrByRow[0] === " _ " && ocrByRow[1] === " _|" && ocrByRow[2] === "|_ ") {
    return "2";
  } else if( ocrByRow[0] === " _ " && ocrByRow[1] === " _|" && ocrByRow[2] === " _|") {
    return "3";
  } else if( ocrByRow[0] === "   " && ocrByRow[1] === "|_|" && ocrByRow[2] === "  |") {
    return "4";
  } else if( ocrByRow[0] === " _ " && ocrByRow[1] === "|_ " && ocrByRow[2] === " _|") {
    return "5";
  } else if( ocrByRow[0] === " _ " && ocrByRow[1] === "|_ " && ocrByRow[2] === "|_|") {
    return "6";
  } else if( ocrByRow[0] === " _ " && ocrByRow[1] === "  |" && ocrByRow[2] === "  |") {
    return "7";
  } else if( ocrByRow[0] === " _ " && ocrByRow[1] === "|_|" && ocrByRow[2] === "|_|") {
    return "8";
  } else if( ocrByRow[0] === " _ " && ocrByRow[1] === "|_|" && ocrByRow[2] === " _|") {
    return "9";
  } else {
    return "?";
  }
}

export const convert = (ocr) => {
  let result = "";
  const ocrByRow = ocr.match(/.{1,3}/g);
  const numOfNumbers = ocrByRow.length / 4;
  for(let i = 0; i < numOfNumbers; i++) {
    let tempArray = ocrByRow.filter((str, index) => {
      return (index - i) % numOfNumbers === 0;
    });
    result = result.concat(identifyNum(tempArray));
  }
  return result;
};
