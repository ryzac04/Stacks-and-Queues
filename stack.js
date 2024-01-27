
const {Node, DoublyLinkedList } = require("./doublyLinkedList")


/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.size = 0;
    this._list = new DoublyLinkedList();
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    this._list.appendFront(val);
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this._list.front) {
      throw new Error("Stack is empty. Cannot remove data.")
    }

    const removedNode = this._list.popFront();
    this.size--;

    return removedNode;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (!this._list.front) {
      throw new Error("Stack is empty. Cannot peek.")
    }
    return this._list.peekFront();
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
