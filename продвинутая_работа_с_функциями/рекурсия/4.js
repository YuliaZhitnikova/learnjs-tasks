'use strict';
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

/*function printList(list) {
    alert(list.value);
    if (list.next) {
        printList(list.next);
    }
}

printList(list);*/

function printList(list) {
    val = list;
    while (val) {
        alert(val.value);
        val = val.next;
    }

}

printList(list);