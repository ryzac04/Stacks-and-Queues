/** Node: node for a deque. */

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class Deque {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    appendFront(val) {
        const newNode = new Node(val);
        if (!this.front) {
            this.front = newNode;
            this.rear = newNode;
        }
        newNode.next = this.front;
        this.front.prev = newNode;
        this.front = newNode;
        
        this.size++;
    }
    appendRear(val) {
        const newNode = new Node(val);
        if (!this.rear) {
            this.front = newNode;
            this.rear = newNode;
        }
        newNode.prev = this.rear;
        this.rear.next = newNode;
        this.rear = newNode;

        this.size++; 
    }
    popFront() {
        if (!this.front) {
            throw new Error("Deque is empty. Cannot dequeue.")
        }
        const removedNode = this.front;
        this.front = this.front.next;

        if (this.front) {
            this.front.prev = null;
        } else {
            this.rear = null;
        }

        this.size--;

        return removedNode.val;
    }
    popRear() {
        if (!this.rear) {
            throw new Error("Deque is empty. Cannot dequeue.")
        }
        const removedNode = this.rear;
        this.rear = this.rear.prev;

        if (this.rear) {
            this.rear.next = null;
        } else {
            this.front = null;
        }

        this.size--;

        return removedNode.val
    }
    peekFront() {
        if (!this.front) {
            throw new Error("Deque is empty. Cannot peek from the front.")
        }
        return this.front.val;
    }
    peekRear() {
        if (!this.front) {
            throw new Error("Deque is empty. Cannot peek from the rear.")
        }
        return this.rear.val;
    }
    isEmpty() {
        return this.size === 0;
    }
}

module.exports = Deque;