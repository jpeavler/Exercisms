export class SpiralMatrix {
  static ofSize(size) {
    let result = [];
    let count = 1;
    let startC = 0;
    let startR = 0;
    let endC = size - 1;
    let endR = size - 1;
    for(let i = 0; i < size; i++) {
      result.push([]);
    }
    while(startC <= endC && startR <= endR) {
      for(let i = startC; i <= endC; i++) {
        result[startR][i] = count;
        count ++;
      }
      startR ++;
      for(let j = startR; j <= endR; j++) {
        result[j][endC] = count;
        count ++;
      }
      endC --;
      for(let k = endC; k >= startC; k--) {
        result[endR][k] = count;
        count ++;
      }
      endR --;
      for(let l = endR; l >= startR; l--) {
        result[l][startC] = count;
        count ++;
      }
      startC ++;
    }
    console.log(result);
    return result;
  }
}
