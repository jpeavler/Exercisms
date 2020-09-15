const opener = "This is the ";
const lines = [
  ["that lay in the ", "house that Jack built."],
  ["that ate the ", "malt"],
  ["that killed the ", "rat"],
  ["that worried the ", "cat"],
  ["that tossed the ", "dog"],
  ["that milked the ", "cow with the crumpled horn"],
  ["that kissed the ", "maiden all forlorn"],
  ["that married the ", "man all tattered and torn"],
  ["that woke the ", "priest all shaven and shorn"],
  ["that kept the ", "rooster that crowed in the morn"],
  ["that belonged to the ", "farmer sowing his corn"],
  ["", "horse and the hound and the horn"]
]
export class House {
  static verse(ver) {
    let result = [];
    result.push(opener);
    for(let i = ver; i >= 1; i--) {
      if(i === ver) {
        result[0] = result[0].concat(lines[i - 1][1]);
      } else {
        result.push(lines[i - 1][0].concat(lines[i - 1][1]));
      }
    }
    return result;
  }

  static verses(start, end) {
    let result = [];
    for(let i = start; i <= end; i++) {
      result = result.concat(this.verse(i));
      if(i != end) {
        result = result.concat([""]);
      }
    }
    return result;
  }
}
