// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {

    var temp = list.getFirst();
    var temp2 = list.getFirst();
    for (let i = 1; i <= n; i++) {
        temp = temp.next;
    }
    while (temp.next != null) {
        temp = temp.next;
        temp2 = temp2.next;
    }
    return temp2;
}

module.exports = fromLast;