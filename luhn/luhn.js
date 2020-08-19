export const valid = (str) => {
  if(str.match(/[^0-9|\s]/)) {
    return false;
  }
  let noSpace = str.replace(" ", "");
  if(noSpace.length <= 1) {
    return false;
  }
};
