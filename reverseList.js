function reverseList(list) { // O(n) linear, 
    if (!list.head) { return list } // If the list is empty

    let currentNode = list.head;
    let previousNode = null;
    while (currentNode.next) {
        let nextNode = currentNode.next;
        currentNode.next = previousNode;

        previousNode = currentNode;
        currentNode = nextNode;
    }
    currentNode.next = previousNode; // Reverse the final pointer
    list.head = currentNode;
}