//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class Element {
  constructor(value) {
    this._value = value;
    this._next = null;
  }
  get value() {return this._value}
  get next() {return this._next}
  set value(val) {this._value = val}
  set next(nex) {this._next = nex}
}

export class List {

  constructor(array) {
    this._head = null;
    this._tail = null;
    this._count = 0;
    if(array) {
      array.forEach((val) => {
        let nextElement = new Element(val);
        this.add(nextElement);
      });
    }
  }
  add(nextElement) {
    nextElement.next = this._head;
    this._head = nextElement;
    if(this._count == 0) {
      this._tail = nextElement;
    }
    this._count++;
  }

  get length() {
    return this._count;
  }

  get head() {
    return this._head;
  }

  toArray() {
    throw new Error("Remove this statement and implement this function");
  }

  reverse() {
    throw new Error("Remove this statement and implement this function");
  }

}

