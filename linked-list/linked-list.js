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
      this._last = pushedNode;
    } else {
      //pushedNode.prev = this._last;
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
    let shiftedNodeValue = this._first.value;
    if(this._count == 1) {
      this._last = null;
      this._first = null;
    } else {
      this._first = this._first.next;
      this._first.prev = null;
    }
    this._count --;
    return shiftedNodeValue;
  }

  unshift(value) {
    let unshiftedNode = new Node(value, null, this._first);
    if(this._count == 0) {
      this._first = unshiftedNode;
      this._last = unshiftedNode;
    } else {
      //unshiftedNode.next = this._first;
      this._first.prev = unshiftedNode;
      this._first = unshiftedNode;
    }
    this._count ++;
  }

  delete(value) {
    let pointer = this._first;
    while(pointer.value != value && pointer.next != null) {
      pointer = pointer.next;
    }
    if(pointer.value != value) {
      return false;
    }
    if(this._count == 1){
      this._last = null;
      this._first = null;
    } else if(pointer == this._first) {
      this._first = this._first.next;
      this._first.prev = null;
    } else if(pointer == this._last) {
      this._last = this._last.prev;
      this._last.next = null;
    } else {
      pointer.prev.next = pointer.next;
      pointer.next.prev = pointer.prev;
    }
    this._count --;
    return true;
  }

  count() {
    return this._count;
  }
}

//module.exports = {LinkedList}