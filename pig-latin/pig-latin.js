const vowels = ["a", "e", "i", "o", "u"];
const clusters = ["ch", "qu", "squ", "th", "thr", "sch", "rh"];
export class translator {
  static translate(str) {
    let result = str;
    let startsVowel = false;
    let startsConsCluster = -1;
    vowels.forEach((letter, index) => {
      if(str[0] == letter) {
        startsVowel = true;
      }      
    });
    clusters.forEach((cluster, index) => {
      if(str[0] === cluster[0] && str[1] === cluster[1]) {
        if(cluster[2] == undefined || cluster[2] === str[2]) {
          startsConsCluster = index;
        }
      }
    });
    if(startsVowel) {
      result = result + "ay";
    } else if(startsConsCluster > -1) {
      result = result.replace(clusters[startsConsCluster], "").concat(clusters[startsConsCluster], "ay");
    } else {
      let tempArr = result.split("");
      let firstLetter = tempArr.shift();
      tempArr.push(firstLetter);
      result = tempArr.join("") + "ay";
    }
    return result;
  }
}
