// Rewrite this function so it works with cycles occuring anywhere in the list
function isCycle(list) { // O(n) linear, traverses the list once
    if (!list.head) { return null }

    let firstNode = list.head;
    let currentNode = list.head;
    while (currentNode.next) {
        if (currentNode.next === firstNode) {
            return true;
        }
        currentNode = currentNode.next;
    }
    return false;
}