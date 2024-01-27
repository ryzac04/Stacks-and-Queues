const Deque = require("./deque");

let deque;

beforeEach(function() {
  deque = new Deque();
});

describe("appendFront", function () {
    it("places the value at the front of the queue and returns undefined", function () {
        expect(deque.appendFront(10)).toBe(undefined);
        expect(deque.front.val).toBe(10);
        expect(deque.rear.val).toBe(10);
        deque.appendFront(100);
        expect(deque.front.val).toBe(100);
        expect(deque.rear.val).toBe(10);
        deque.appendFront(1000);
        expect(deque.front.val).toBe(1000);
        expect(deque.rear.val).toBe(10);
    });
});

describe("appendRear", function () {
    it("places the value at the rear of the queue and returns undefined", function () {
        expect(deque.appendRear(10)).toBe(undefined);
        expect(deque.rear.val).toBe(10);
        expect(deque.front.val).toBe(10);
        deque.appendRear(100);
        expect(deque.rear.val).toBe(100);
        expect(deque.front.val).toBe(10);
        deque.appendRear(1000);
        expect(deque.rear.val).toBe(1000);
        expect(deque.front.val).toBe(10);
    });
});

describe("popFront", function () {
    it("removes and returns the value at the front of the queue", function () {
        deque.appendFront(10);
        deque.appendFront(20);
        deque.appendFront(30);
        deque.popFront();
        expect(deque.size).toBe(2);
        expect(deque.front.val).toBe(20);
        deque.popFront();
        expect(deque.size).toBe(1);
        expect(deque.front.val).toBe(10);
    });
});

describe("popRear", function () {
    it("removes and returns the value at the rear of the queue", function () {
        deque.appendFront(100);
        deque.appendRear(300);
        deque.appendFront(150);
        deque.appendRear(187);
        deque.popRear();
        deque.popRear();
        expect(deque.size).toBe(2);
        expect(deque.rear.val).toBe(100)
    });
});

describe("peekFront", function () {
    it("returns the value at the start of the deque", function () {
        deque.appendFront(10);
        expect(deque.peekFront()).toBe(10);
        deque.appendFront(23);
        expect(deque.peekFront()).toBe(23);
    });
});

describe("peekRear", function () {
    it("returns the value at the rear of the deque", function () {
        deque.appendFront(1);
        expect(deque.peekRear()).toBe(1);
        deque.appendRear(32);
        expect(deque.peekRear()).toBe(32);
    });
});

describe("isEmpty", function () {
    it("returns true if there is nothing in deque", function () {
        deque.appendFront(12);
        expect(deque.isEmpty()).toBe(false);
        deque.popFront();
        expect(deque.isEmpty()).toBe(true);
    });
});

