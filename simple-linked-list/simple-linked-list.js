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
  set value(value) {this._value = value}
  set next(next) {this._next = next}
}

export class SimpleLinkedList {

  constructor(array) {
    this._count = 0;
    this._head = null;
    this._tail = null;
  }

  add(nextValue) {
    let addedNode = new Element(nextValue);
    addedNode.next = this._head;
    this._head = addedNode;
    if(this._count == 0) {
      this._tail = addedNode;
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

