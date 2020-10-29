const vowels = ["a", "e", "i", "o", "u"];
const clusters = ["ch", "qu", "squ", "th", "thr", "sch", "rh"];
export class translator {
  static translate(str) {
    let strArray = str.split(" ");
    strArray.forEach((word, index) => {
      let startsVowel = false;
      let startsConsCluster = -1;
      vowels.forEach((letter, index) => {
        if(word[0] == letter) {
          startsVowel = true;
        }      
      });
      clusters.forEach((cluster, index) => {
        if(word[0] === cluster[0] && word[1] === cluster[1]) {
          if(cluster[2] == undefined || cluster[2] === word[2]) {
            startsConsCluster = index;
          }
        }
      });
      if((word[0] === "y" && word[1] === "t") || (word[0] === "x" && word[1] == "r")) {
        strArray[index] = word + "ay";
      }else if(startsVowel) {
        strArray[index] = word + "ay";
      } else if(startsConsCluster > -1) {
        strArray[index] = word.replace(clusters[startsConsCluster], "").concat(clusters[startsConsCluster], "ay");
      } else {
        let tempArr = word.split("");
        let firstLetter = tempArr.shift();
        tempArr.push(firstLetter);
        strArray[index] = tempArr.join("") + "ay";
      }
    });
    let result = strArray.join(" ");
    return result;
  }
}
