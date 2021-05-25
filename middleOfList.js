function findMiddle(list) {
    // Do not add a length property or use size()

    // Have two cursors traversing the list, one at double speed
    // Once the 2x cursor reaches the end, return the other

    if (!list.head) { return null }

    let playerOne = list.head;
    let playerTwo = null;
    while (playerOne) {
        playerOne = playerOne.next ? playerOne.next.next : null;
        playerTwo = playerTwo ? playerTwo.next : list.head;
    }
    return playerTwo;
}