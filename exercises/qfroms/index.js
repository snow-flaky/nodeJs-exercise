// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {

    constructor() {
        this.pushStack = new Stack();
        this.popStack = new Stack();
        this.size = 0;
    }

    add(record) {
        this.pushStack.push(record);
    }

    remove() {
        if (this.popStack.peek) {
            return this.popStack.pop();
        }
        while (this.pushStack.peek()) {
            this.popStack.push(this.pushStack.pop());
        }
        return this.popStack.pop();
    }

}

module.exports = Queue;