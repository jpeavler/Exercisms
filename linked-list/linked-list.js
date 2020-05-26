//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
class Node {
  constructor(value, prev, next) {
    this._value = value;
    this._prev = prev;
    this._next = next;
  }

  get value() { return this._value }
  get prev() { return this._prev }
  get next() { return this._next }

  set value(val) { this._value = val }
  set prev(prev) { this._prev = prev }
  set next(next) { this._next = next }
}

export class LinkedList {
  constructor() {
    this._count = 0;
    this._first = null;
    this._last = null;
  }
  push(value) {
    let pushedNode = new Node(value, this._last, null);
    if(this._count == 0) {
      this._first = pushedNode;
      console.log("Linked List first: " ,this._first);
      this._last = pushedNode;
      console.log("Linked List last: " ,this._last);
    } else {
      pushedNode.prev = this._last;
      this._last.next = pushedNode;
      this._last = pushedNode;
    }
    this._count ++;
  }

  pop() {
    let poppedNodeValue = this._last.value;
    if(!this._last.prev) {
      this._last = null;
      this._first = null;
    } else {
      this._last = this._last.prev;
      this._last.next = null;
    }
    this._count --;
    return poppedNodeValue;
  }

  shift() {
    throw new Error("Remove this statement and implement this function");
  }

  unshift() {
    throw new Error("Remove this statement and implement this function");
  }

  delete() {
    throw new Error("Remove this statement and implement this function");
  }

  count() {
    return this._count;
  }
}

//module.exports = {LinkedList}