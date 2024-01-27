
const { Node, DoublyLinkedList } = require("./doublyLinkedList")

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.size = 0;
    this._list = new DoublyLinkedList();
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this._list.appendRear(val);
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (!this._list.front) {
      throw new Error("Queue is empty. Cannot dequeue.");
    }

    const removedNode = this._list.popFront();
    this.size--;

    return removedNode;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (!this._list.front) {
      throw new Error("Queue is empty. Cannot peek.")
    }

    return this._list.peekFront();
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
