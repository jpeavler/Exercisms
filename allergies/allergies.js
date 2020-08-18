const allergyArr = ["cats", "pollen", "chocolate", "tomatoes", "strawberries", "shellfish", "peanuts", "eggs"];
export class Allergies {
  constructor(score) {
    this.allergyScore = score;
    while(this.allergyScore > 256) {
      this.allergyScore -= 256;
    }
    this.binaryScore = this.allergyScore.toString(2);
    while(this.binaryScore.length < 8) {
      this.binaryScore = "0".concat(this.binaryScore);
    }
  }

  list() {
    let allergyList = [];
    allergyArr.forEach(al => {
      if(this.allergicTo(al)) {
        allergyList.push(al);
      }
    });
    return allergyList.reverse();
  }

  allergicTo(allergen) {
    // console.log(this.binaryScore[allergyArr.findIndex(allergen)]);
    if(this.binaryScore[allergyArr.indexOf(allergen)] == "1") {
      return true;
    } else {
      return false;
    }
  }
}
