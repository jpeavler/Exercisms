const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const randomKey = () => {
  let key = "";
  for(let i = 0; i < 100; i++) {
    key = key.concat(ALPHABET[Math.floor(Math.random() * 26)]);
  }
  return key;
}
export class Cipher {
  constructor(key) {
    this._key = key ? key : randomKey();
  }

  encode(str) {
    let encoded = "";
    for(let i = 0; i < str.length; i++) {
      let incrementer = ALPHABET.indexOf(this._key[i% this._key.length]);
      let originalIndex = ALPHABET.indexOf(str[i])
      encoded = encoded.concat(ALPHABET[(incrementer + originalIndex) % 26]);
    }
    return encoded;
  }

  decode(str) {
    let decoded = ""
    for(let i = 0; i < str.length; i++) {
      let originalIndex = ALPHABET.indexOf(str[i]);
      let decrementer = ALPHABET.indexOf(this._key[i % this._key.length])
      decoded = decoded.concat(ALPHABET[(originalIndex - decrementer + 26) % 26]);
    }
    return decoded;
  }

  get key() {
    return this._key;
  }
}
