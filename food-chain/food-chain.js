export class Song {
  constructor() {
    this.list = ["fly", "spider", "bird", "cat", "dog", "goat", "cow", "horse"];
    this.opener = "I know an old lady who swallowed a ";
    this.closer = "I don't know why she swallowed the fly. Perhaps she'll die.\n";
    this.wriggled = "wriggled and jiggled and tickled inside her.\n";
    this.swallowed = "She swallowed the ";
    this.catch = " to catch the ";
  }
  verse(ver) {
    let result = this.opener + this.list[ver -1] + ".\n";
    if(ver === 1) {
      result = result.concat(this.closer);
    }
    if(ver === 2) {
      result = result.concat( "It ", this.wriggled, this.swallowed, this.list[1], this.catch, this.list[0], ".\n" , this.closer);
    }
    if(ver === 3) {
      result = result.concat("How absurd to swallow a bird!\n", this.swallowed, this.list[2], this.catch, this.list[1], " that ", this.wriggled,
        this.swallowed, this.list[1], this.catch, this.list[0], ".\n", this.closer);
    }
    if(ver === 4) {
      result = result.concat("Imagine that, to swallow a cat!\n", this.swallowed, this.list[3], this.catch, this.list[2], ".\n", this.swallowed,
        this.list[2], this.catch, this.list[1], " that ", this.wriggled, this.swallowed, this.list[1], this.catch, this.list[0], ".\n", this.closer);
    }
    if(ver === 5) {
      result = result.concat("What a hog, to swallow a dog!\n", this.swallowed, this.list[4], this.catch, this.list[3], ".\n",
        this.swallowed, this.list[3], this.catch, this.list[2], ".\n", this.swallowed, this.list[2], this.catch, this.list[1], 
        " that ", this.wriggled, this.swallowed, this.list[1], this.catch, this.list[0], ".\n", this.closer);
    }
    if(ver === 6) {
      result = result.concat("Just opened her throat and swallowed a goat!\n", this.swallowed, this.list[5], this.catch, this.list[4], ".\n",
        this.swallowed, this.list[4], this.catch, this.list[3], ".\n", this.swallowed, this.list[3], this.catch, this.list[2], ".\n", this.swallowed,
        this.list[2], this.catch, this.list[1], " that ", this.wriggled, this.swallowed, this.list[1], this.catch, this.list[0], ".\n", this.closer);
    }
    if(ver === 7) {
      result = result.concat("I don't know how she swallowed a cow!\n", this.swallowed, this.list[6], this.catch, this.list[5], ".\n",
        this.swallowed, this.list[5], this.catch, this.list[4], ".\n",
        this.swallowed, this.list[4], this.catch, this.list[3], ".\n", this.swallowed, this.list[3], this.catch, this.list[2], ".\n", this.swallowed,
        this.list[2], this.catch, this.list[1], " that ", this.wriggled, this.swallowed, this.list[1], this.catch, this.list[0], ".\n", this.closer);
    }
    if(ver === 8) {
      result = result.concat("She's dead, of course!\n");
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
