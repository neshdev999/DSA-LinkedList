function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            } else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

//O(n^2) quadratic, it traverses the list once for each node in the list This program removes duplicates from a linked list