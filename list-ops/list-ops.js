export class List {
  constructor(arr = []) {
    this.values = [];
    for(let i = 0; i < arr.length; i++) {
      this.values.push(arr[i]);
    }
  }

  append(list2) {
    for(let i = 0; i < list2.length(); i++) {
      this.values.push(list2.values[i]);
    }
    return this;
  }

  concat(lists) {
    for(let i = 0; i < lists.length(); i++) {
      for(let j = 0; j < lists.values[i].values.length; j++) {
        this.values.push(lists.values[i].values[j]);
      }
    }
    return this;
  }

  filter(func) {
    let filtered = [];
    for(let i = 0; i < this.length(); i++) {
      if(func(this.values[i])) {
        filtered.push(this.values[i]);
      }
    }
    return new List(filtered);
  }

  map(func) {
    let mapped = [];
    for(let i = 0; i < this.length(); i++) {
      mapped.push(func(this.values[i]));
    }
    return new List(mapped);
  }

  length() {
    return this.values.length;
  }

  foldl(func, start) {
    let total = start;
    for(let i = 0; i < this.length(); i++) {
      total = func(total, this.values[i]);
    }
    return total;
  }

  foldr() {
    throw new Error("Remove this statement and implement this function");
  }

  reverse() {
    throw new Error("Remove this statement and implement this function");
  }
}
