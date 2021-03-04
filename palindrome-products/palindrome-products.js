const isPalindrome = (num) => {
  let reverseNum = parseInt(num.toString().split("").reverse().join(""));
  return num === reverseNum;
}

const factors = (maxFactor, minFactor, num) => {
  let result = [];
  let maxDivisor = Math.min(maxFactor, Math.sqrt(num));
  for(let i = minFactor; i <= maxDivisor; i++) {
    if(num % i == 0 && (num / i) <= maxFactor && (num / i) >= minFactor ) {
      result.push([i, num / i])
    };
  }
  return result;
}

export class Palindromes {

  static generate({maxFactor, minFactor}) {
    let min;
    let max;

    if (minFactor > maxFactor) {
      throw('min must be <= max');
    }

    for(let i = minFactor; i <= maxFactor; i++) {
      for(let j = i; j <= maxFactor; j++) {
        const product = i * j;
        if(isPalindrome(product)) {
          min = Math.min(product, min ?? Infinity);
          max = Math.max(product, max ?? 0);
        }
      }
    }

    return {
      smallest: {
        value : min ?? null, factors : factors(maxFactor, minFactor, min)
      },
      largest : {
        value : max ?? null, factors : factors(maxFactor, minFactor, max)
      }
    }
  }

  
}
