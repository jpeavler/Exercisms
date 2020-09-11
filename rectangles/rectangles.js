//Was able to solve this exercism by heavily referencing thiagorasouza's code on exercim.io
export class Rectangles {
  static count(ascii) {
    if(ascii.length === 0) return 0;
    const scanRow = (startAt = 0) => {
      const startRow = ascii[0];
      const startCorner = startRow.indexOf('+', startAt);
      if(startCorner === -1) return 0;
      let count = 0;
      for(let i = startCorner + 1; i < startRow.length; i++) {
        if(startRow[i] !== "+") continue;
        for(let j = 1; j < ascii.length; j++) {
          const start = ascii[j][startCorner];
          const end = ascii[j][i];
          if (start === "+" && end == '+') count++;
          if (!/[|+]{2}/.test(start + end)) break;
        }
      }
      return count + scanRow(startCorner + 1);
    }
    return scanRow() + this.count(ascii.slice(1));
  }
}
