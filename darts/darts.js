export const score = (x, y) => {
  let dist = Math.sqrt(x**2 + y**2);
  if(dist > 10) {
    return 0;
  } else if(dist > 5) {
    return 1;
  } else if(dist > 1) {
    return 5;
  } else {
    return 10;
  }
};
