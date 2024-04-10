//DoublyLinkedList

class Node {
    	constructor(val) {
		this.data = val;
		this.next = null;
		this.prev = null;
	}
}
class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
        this.size = 0;
	}
	isEmpty() {
		if (this.head == null) return true;
		return false;
	}
	insertEnd(val) {
		let temp = new Node(val);
		if (this.head == null) {
			this.head = temp;
			this.tail = temp;
		}
		else {
			temp.prev = this.tail;
			this.tail.next = temp;
			this.tail = this.tail.next;
		}
        this.size++;
		console.log('inserted at end',val)

	}

	insertStart(val) {
		let temp = new Node(val);
		if (this.head == null) {
			this.head = temp;
			this.tail = temp;
		}
		else {
			temp.next = this.head;
			this.head.prev = temp;
			this.head = temp;
		}
        this.size++;
		console.log('inserted at start',val)
	}

	insertAt(val, pos) {
		if(pos<0||pos>this.size){
            console.log("Out Of Index");
        }
        if (pos===0){return this.insertStart(val);}
        let count=0;
        let curr=this.head;
        while(count<pos){
            count++;
            curr=curr.next;
        }
		let temp = new Node(val);
        curr.prev.next=temp;
        temp.prev=curr.prev;
        temp.next=curr;
        curr.prev=temp;
        this.size++;

	}
    removeAt(pos){
        if(pos<0||pos>this.size){
            console.log("Out Of Index");
            return;
        }
        if (pos==0){
            this.head=this.head.next;
            this.size--;
            return;
        }
        let count=0;
        let cur=this.head;
        while(count<pos){
            count++;
            cur=cur.next;
        }
        cur.prev.next=cur.next;
        cur.next.prev=cur.prev;
        this.size--;
    }

	display() {
		if (!this.isEmpty()) {
			let curr = this.head;
			console.log('Required list is')

			while (curr !== null) {
				console.log(curr.data);
				curr = curr.next;
			}
            console.log("Size is "+this.size);
		}
	}
	displayRev() {
		if (!this.isEmpty()) {
			let curr = this.tail;
			console.log('Required list in reverse order is')
			while (curr !== null) {
				console.log(curr.data);
				curr = curr.prev;
			}
            console.log("Size is "+this.size);
		}
	}
}

const dll = new DoublyLinkedList();
dll.insertEnd(25);
dll.insertEnd(27);
dll.insertStart(17);
dll.insertStart(29);
dll.insertAt(65,3);
dll.removeAt(2);
dll.displayRev();
// dll.display();
