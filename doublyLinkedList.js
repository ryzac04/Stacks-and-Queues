
/** Node: node for a DoublyLinkedList. */

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

/** DoublyLinkedList that has methods that will work for several ADTs including queues, stacks, and deques. */

class DoublyLinkedList {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

/** appendFront(val): add new value to end of the structure. Returns undefined. */

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

/** appendRear(val): add new value to end of the structure. Returns undefined. */

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

/** popFront(): remove the node from the front of the structure and return its value. Throws an error if empty. */

    popFront() {
        if (!this.front) {
            throw new Error("The structure is empty. Cannot pop from front.")
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

/** popRear(): remove the node from the rear of the structure and return its value. Throws an error if empty. */

    popRear() {
        if (!this.rear) {
            throw new Error("Structure is empty. Cannot pop from rear.")
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

/** peekFront(): return the value of the front node in the queue. */
    
    peekFront() {
        if (!this.front) {
            throw new Error("Structure is empty. Cannot peek from front.")
        }
        return this.front.val;
    }

/** peekRear(): return the value of the rear node in the queue. */

    peekRear() {
        if (!this.front) {
            throw new Error("Structure is empty. Cannot peek from rear.")
        }
        return this.rear.val;
    }

/** isEmpty(): return true if the queue is empty, otherwise false */

    isEmpty() {
        return this.size === 0;
    }
}

module.exports = { DoublyLinkedList, Node };