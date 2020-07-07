export const encode = (toEncode) => {
  let encoded = "";
  let tally = 1;
  for(let i = 0; i < toEncode.length; i++) {
    let lookAhead = i + 1;
    let j = i;
    while(toEncode[i] == toEncode[lookAhead]) {
      tally ++;
      lookAhead ++;
      j ++;
    }
    if(tally > 1) {
      encoded = encoded.concat(tally, toEncode[i]);
    } else {
      encoded = encoded.concat(toEncode[i]);
    }
    tally = 1;
    i = j;
  }
  return encoded;
};

export const decode = (toDecode) => {
  let decoded = "";
  let tally = "";
  for(let i = 0; i < toDecode.length; i++) {
    if(toDecode[i].match(/\d/)) {
      tally = tally.concat(toDecode[i]);
    } else {
      if(tally == "") {tally = "1";}
      for(let j = 0; j < parseInt(tally); j++) {
        decoded = decoded.concat(toDecode[i]);
      }
      tally = "";
    }
  }
  return decoded;
};
