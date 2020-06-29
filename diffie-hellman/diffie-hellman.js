//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const checkPrime = (num) => {
  for(let i = 2; i < num/2; i++) {
    if(num % i == 0) {return false;}
  }
  return true;
}
export class DiffieHellman {
  constructor(p, g) {
    if(p < 1 || g >= p) {
      throw new Error("Diffie Hellman input must be within range.");
    }
    if(!checkPrime(p) || !checkPrime(g)) {
      throw new Error("Diffie Hellman input must be prime numbers.");
    }
    this._p = p;
    this._g = g;
  }

  getPublicKeyFromPrivateKey(priv) {
    if(priv < 2) {
      throw new Error("Private Key must be positive and greater than one");
    }
    if(priv >= this._p) {
      throw new Error("Private Key must be less than modulous parameter p");
    }
    return this._g**priv % this._p;
  }

  getSharedSecret(priv, pub) {
    return pub**priv % this._p;
  }
}
