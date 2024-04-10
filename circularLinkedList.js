//CircularLinkedList

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.head = null;
    }
  
    insertAtBeginning(data) {
      const newNode = new Node(data);
      if (this.head === null) {
        this.head = newNode;
        newNode.next = this.head;
      } else {
        newNode.next = this.head;
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        current.next = newNode;
        this.head = newNode;
      }
    }
  
    insertAtEnd(data) {
      const newNode = new Node(data);
      if (this.head === null) {
        this.head = newNode;
        newNode.next = this.head;
      } else {
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        current.next = newNode;
        newNode.next = this.head;
      }
    }
  
    deleteAtBeginning() {
      if (this.head === null) {
        return;
      } else if (this.head.next === this.head) {
        this.head = null;
      } else {
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        current.next = this.head.next;
        this.head = this.head.next;
      }
    }
  
    deleteAtEnd() {
      if (this.head === null) {
        return;
      } else if (this.head.next === this.head) {
        this.head = null;
      } else {
        let current = this.head;
        let prev = null;
        while (current.next !== this.head) {
          prev = current;
          current = current.next;
        }
        prev.next = this.head;
      }
    }
  
    print() {
      if (this.head === null) {
        return;
      }
      let current = this.head;
      do {
        console.log(current.data);
        current = current.next;
      } while (current !== this.head);
    }
  }
  
  const list = new CircularLinkedList();
  list.insertAtBeginning(10);
  list.insertAtBeginning(20);
  list.insertAtBeginning(30);
  list.insertAtEnd(40);
  list.insertAtEnd(50);  
  list.deleteAtBeginning();
  list.deleteAtEnd();
  list.print();
  