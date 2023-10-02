/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.tail.next = null;
    this.length ++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head) {
      const pastHead = this.head;
      this.head = newNode;
      this.head.next = pastHead;
    } else {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = null;
    }

    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.tail === null) return null;

    let prevTail;
    let current = this.head;

    while (current.next !== null) {
      prevTail = current;
      current = current.next;
      console.log("PrevTail:", prevTail);
      console.log("current:", current);
    }

    console.log("prevTail is:", prevTail);
    const lastTail = prevTail.next;
    this.tail = prevTail;
    prevTail.next = null;
    this.length--;
    console.log("last tail:", lastTail)

    return lastTail.val;
  }

  /** shift(): return & remove first item. */

  shift() {

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
