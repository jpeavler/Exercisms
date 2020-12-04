const dayArray = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"];
const giftArray = [
  "a Partridge in a Pear Tree.\n",
  "two Turtle Doves",
  "three French Hens",
  "four Calling Birds",
  "five Gold Rings",
  "six Geese-a-Laying",
  "seven Swans-a-Swimming",
  "eight Maids-a-Milking",
  "nine Ladies Dancing",
  "ten Lords-a-Leaping",
  "eleven Pipers Piping",
  "twelve Drummers Drumming"
]

const reciteOne = (verse) => {  //Helper function to print out a single verse.
  let result = "";
  result += `On the ${dayArray[verse - 1]} day of Christmas my true love gave to me: `;
  for(let i = verse; i > 0; i--) {
    if(i === 1 && verse !== 1) {
      result += "and ";
    }
    result += `${giftArray[i -1]}`;
    if(i !== 1) {
      result += ", "
    }
  }
  return result;
}

export const recite = (verseStart, verseEnd) => {
  let result = "";
  if(verseEnd) {
    for(let i = verseStart; i <= verseEnd; i++) {
      result += reciteOne(i);
      if ( i !== verseEnd) {
        result = result.concat('\n');
      }
    }
  }
  else {
    result = reciteOne(verseStart);
  }
  return result;
};
