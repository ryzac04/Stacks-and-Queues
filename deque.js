
const { Node, DoublyLinkedList } = require("./doublyLinkedList");

/** Deque:  double-ended queue where you can add or remove from the front or the back.*/

class Deque {
    constructor() {
        this.size = 0;
        this._list = new DoublyLinkedList();
    }

/** appendFront(val): add new value to end of the structure. Returns undefined. */

    appendFront(val) {
        this._list.appendFront(val);
        this.size++;
    }

/** appendRear(val): add new value to end of the structure. Returns undefined. */

    appendRear(val) {
        this._list.appendRear(val);
        this.size++; 
    }

/** popFront(): remove the node from the front of the structure and return its value. Throws an error if empty. */

    popFront() {
        if (!this._list.front) {
            throw new Error("Deque is empty. Cannot dequeue.")
        }

        const removedNode = this._list.popFront();
        this.size--;

        return removedNode;
    }

/** popRear(): remove the node from the rear of the structure and return its value. Throws an error if empty. */

    popRear() {
        if (!this._list.rear) {
            throw new Error("Deque is empty. Cannot dequeue.")
        }

        const removedNode = this._list.popRear();
        this.size--;

        return removedNode;
    }

/** peekFront(): return the value of the front node in the queue. */

    peekFront() {
        if (!this._list.front) {
            throw new Error("Deque is empty. Cannot peek from the front.")
        }
        return this._list.peekFront();
    }

/** peekRear(): return the value of the rear node in the queue. */

    peekRear() {
        if (!this._list.front) {
            throw new Error("Deque is empty. Cannot peek from the rear.")
        }
        return this._list.peekRear();
    }

/** isEmpty(): return true if the queue is empty, otherwise false */

    isEmpty() {
        return this.size === 0;
    }
}

module.exports = Deque;