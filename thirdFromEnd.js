function thirdFromEnd(list) { // O(2n) linear
    const length = linkedListHelpers.size(list);

    // See the findByIndex helper for implementation
    return linkedListHelpers.findByIndex(list, length - 3);
}

/// Previously added


class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) { // O(1) constant time, no iteration
        this.head = new _Node(item, this.head)
    }

    insertLast(item) {
        if (!this.head) { return this.insertFirst(item) } // If the list is empty

        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = new _Node(item, null)
    }

    insertBefore(value, item) { // O(n) linear time
        if (!this.head) { return null } // If the list is empty, do nothing
        if (this.head.value === value) { // If the lookup value is the first item in the list
            this.insertFirst(item);
            return;
        }

        let currentNode = this.head;
        let previousNode = this.head;
        while (currentNode.value !== value) {
            if (!currentNode.next) { return null } // If the lookup value is not found, do nothing
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = new _Node(item, currentNode);
    }

    insertAfter(value, item) { // O(n) linear time, same implementation as insertBefore essentially
        if (!this.head) { return null } // If the list is empty, do nothing

        let currentNode = this.head;
        while (currentNode.value !== value) {
            if (!currentNode.next) { return null } // If the lookup value is not found, do nothing
            currentNode = currentNode.next;
        }

        currentNode.next = new _Node(item, currentNode.next)
            // We initialize the node node with the current pointer, then set the current point to the new node
    }

    insertAt(index, item) {
        if (index === 0) { // Handle if index to insert at is 0
            return this.insertFirst(item);
        }

        let counter = 1;
        let currentNode = this.head.next;
        let previousNode = this.head;
        while (counter < index) {
            if (!currentNode.next) { return null } // If the index does not exist in our list
            previousNode = currentNode;
            currentNode = currentNode.next;
            counter++;
        }

        previousNode.next = new _Node(item, currentNode)
    }

    find(value) { // O(n) linear time, iterates through the list
        if (!this.head) { return null } // If the list is empty

        let currentNode = this.head;

        while (currentNode.value !== value) {
            if (!currentNode.next) { return null } // If we reach the end of the list

            currentNode = currentNode.next;
        }

        return currentNode;
    }

    remove(value) {
        if (!this.head) { return null } // If the list is empty
        if (this.head.value === value) { // If it's the first node in the list
            this.head = this.head.next;
            return;
        }

        let currentNode = this.head;
        let previousNode = this.head;

        while (currentNode.value !== value) {
            if (!currentNode.next) { return null } // If we reach the end of the list

            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next
    }
}

const linkedListHelpers = {
    display: function(list) { // O(n) linear
        if (!list.head) { return console.log('The list is empty') }

        let currentNode = list.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    },
    size: function(list) { // O(n) linear time
        let counter = 0;
        let currentNode = list.head;
        while (currentNode) {
            counter++;
            currentNode = currentNode.next;
        }
        return counter;
    },
    isEmpty: function(list) { // O(1) constant time
        if (!list.head) { return true }
        return false;
    },
    findPrevious: function(list, value) { // O(n) linear
        if (!list.head) { return null } // If the list is empty

        let currentNode = list.head;
        let previousNode = list.head
        while (currentNode.value !== value) {
            if (!currentNode.next) { return null } // If we reach the end of the list without finding the value
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        return previousNode;
    },
    findLast: function(list) { // O(n) linear
        if (!list.head) { return null } // If the list is empty

        let currentNode = list.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode;
    },
    findByIndex: function(list, index) {
        if (!list.head) { return null }
        let counter = 0;
        let currentNode = list.head;
        while (counter < index) {
            if (!currentNode.next) { return null } // If the index does not exist in our list
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }
}