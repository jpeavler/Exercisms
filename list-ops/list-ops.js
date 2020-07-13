export class List {
  constructor(arr = []) {
    this.values = [];
    for(let i = 0; i < arr.length; i++) {
      this.values.push(arr[i]);
    }
  }

  append(list2) {
    for(let i = 0; i < list2.values.length; i++) {
      this.values.push(list2.values[i]);
    }
    return this;
  }

  concat() {
    throw new Error("Remove this statement and implement this function");
  }

  filter() {
    throw new Error("Remove this statement and implement this function");
  }

  map() {
    throw new Error("Remove this statement and implement this function");
  }

  length() {
    throw new Error("Remove this statement and implement this function");
  }

  foldl() {
    throw new Error("Remove this statement and implement this function");
  }

  foldr() {
    throw new Error("Remove this statement and implement this function");
  }

  reverse() {
    throw new Error("Remove this statement and implement this function");
  }
}
