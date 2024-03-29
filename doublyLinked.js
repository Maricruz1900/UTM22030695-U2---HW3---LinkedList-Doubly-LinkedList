class Node {
    constructor(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    };
};

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    };

    /*INSERTA AL INICIO*/ prepend(data) {
       const newNode = new Node(data, this.head, null);

       if (this.head){
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
       } else {
              this.head = newNode;
              this.tail = newNode;
       };
       this.size++;
    };

    /*INSERTA AL FINAL*/ apend(data) {
        const newNode = new Node(data, null, this.tail);

        if (this.tail){
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.tail = newNode;
            this.head = newNode;
        };
        this.size++;
    };

    /* INSERTA DESPUES DE UN NODO*/ insertAfterNode(data, index) {
        if (index < 0 || index > this.size) {
            return null;
        };

        const newNode = new Node(data, null, null);
        let current = this.head;
        let previous;

        if (index === 0) {
            newNode.next = current;
            current.prev = newNode;
            this.head = newNode;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            };

            newNode.next = current;
            newNode.prev = previous;
            current.prev = newNode;
            previous.next = newNode;
        };
        this.size++;
        
    };

     /*BORRA LA CABEZA*/ deleteHead() {
        if (!this.head) {
            return null;
        };

        const valueToReturn = this.head.data;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        };
        this.size--;
        return valueToReturn;
     };

        /*BORRA LA COLA*/ deleteTail() {
            if (!this.tail) {
                return null;
            };

            const valueToReturn = this.tail.data;

            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            };
            this.size--;
            return valueToReturn;
        };

        /*BORRA UN NODO*/ removeData(data) {
            let current = this.head;
            let previous = null;

    while (current !== null) {
        if (current.data === data) {
            if (!previous) {
                return this.deleteHead();
            } else if (!current.next) {
                return this.deleteTail();
            } else {
                previous.next = current.next;
                current.next.prev = previous;
            };
            this.size--;
            return current.data;
        };
        previous = current;
        current = current.next;
    };

    return null;
};

/*RECORRE UNA LISTA*/ traverse() {
    let current = this.head;
    while (current) {
        console.log(current.data);  
        current = current.next;
    }
}

print() {
    let current = this.head;
    let result = "";
    while (current) {
        result += current.data + " <-> ";
        current = current.next;
    }
    return result += ' X ';
}

reservePrint() {
    let current = this.tail;
    let result = '';
    while (current) {
        result += current.data + " <-> ";
        current = current.prev;
    }
    return result += ' X ';
}
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.prepend(3);
doublyLinkedList.prepend(2);
doublyLinkedList.apend(7);
doublyLinkedList.apend(8);
doublyLinkedList.insertAfterNode(4, 2);
doublyLinkedList.removeData();

console.log(doublyLinkedList.print());
console.log(doublyLinkedList.reservePrint());
doublyLinkedList.traverse();  

/*//console.log(doublyLinkedList.deleteHead());
//console.log(doublyLinkedList.deleteTail());
//doublyLinkedList.deleteHead();
//doublyLinkedList.deleteTail();*/