
export class NucleotideCounts {
  static parse(strand) {
    let A = 0;
    let C = 0;
    let G = 0;
    let T = 0;
    let invalid = 0;
    let strandArray = strand.split("");
    strandArray.forEach(char => {
      switch(char) {
        case "A":
          A++;
          break;
        case "C":
          C++;
          break;
        case "G":
          G++;
          break;
        case "T":
          T++;
          break;
        default:
          invalid++;
      }
    });
    if(invalid > 0) {
      throw new Error("Invalid nucleotide in strand");
    }
    return A.toString().concat(" ", C, " ", G, " ", T);
  }
}
