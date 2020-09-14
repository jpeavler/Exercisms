export class Song {
  constructor() {
    this.list = ["fly", "spider", "bird", "cat", "dog", "goat", "cow", "horse"];
    this.unique = [
      "How absurd to swallow a bird!\n",
      "Imagine that, to swallow a cat!\n",
      "What a hog, to swallow a dog!\n",
      "Just opened her throat and swallowed a goat!\n",
      "I don't know how she swallowed a cow!\n",
      "She's dead, of course!\n"
    ]
    this.opener = "I know an old lady who swallowed a ";
    this.closer = "I don't know why she swallowed the fly. Perhaps she'll die.\n";
    this.wriggled = "wriggled and jiggled and tickled inside her.\n";
    this.swallowed = "She swallowed the ";
    this.catch = " to catch the ";
  }
  verse(ver) {
    let result = this.opener + this.list[ver -1] + ".\n"; //I know an old lady who swallowed an x.
    if(ver === 2) {                                       //For verse 2
      result = result.concat( "It ", this.wriggled, this.swallowed, this.list[1], this.catch, this.list[0], ".\n");
    }
    if(ver >= 3 && ver <= 7) {                            //For verses 3-7
      result = result.concat(this.unique[ver - 3]);
      for(let i = ver; i >= 3; i--) {
        result = result.concat(this.swallowed, this.list[i -1], this.catch, this.list[i - 2]);
        if(i != 3) {
          result = result.concat(".\n");
        }
      }
      result = result.concat(" that ", this.wriggled, this.swallowed, this.list[1], this.catch, this.list[0], ".\n");
    }
    if(ver === 8) {                                       //End of verse 8
      result = result.concat(this.unique[5]);
    } else {                                              //End of verses 1-7
      result = result.concat(this.closer);
    }
    return result;
  }

  verses(verseStart, verseEnd) {
    let result = "";
    for(let i = verseStart; i <= verseEnd; i++) {
      result = result.concat(this.verse(i), "\n");
    }
    return result;
  }
}
