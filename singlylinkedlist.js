//singlelinkedlist
class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    insertatFirst(data){
        this.head=new Node(data,this.head);
        this.size++;
    }
    insertatLast(data){
        let n=new Node(data);
        if(!this.head){
            this.head=n;
        }
        else{
            let cur=this.head;
            while(cur.next){
                cur=cur.next;
            }
            cur.next=n;
        }
        this.size++
    }
    insertatIndex(data,index){
        if (index > 0 && index > this.size) {
            return;
        }
        if (index==0){
            this.insertatFirst(data);
            return;
        }
        let n=new Node(data);
        let count=0;
        let cur=this.head, prev;
        while(count<index){
            prev=cur;
            count++;
            cur=cur.next;
        }
        prev.next=n;
        n.next=cur;
        this.size++;
    }
    removeatIndex(index){
        if (index > 0 && index > this.size) {
            return;
        }
        if (index==0){
            this.head=this.head.next;
            this.size--;
            return;
        }
        let count=0;
        let cur=this.head,prev;
        while(count<index){
            prev=cur;
            count++;
            cur=cur.next;
        }
        prev.next=cur.next;
        this.size--;
    }
    getatIndex(index){
        if (index > 0 && index > this.size) {
            return;
        }
        let count=0;
        let cur=this.head;
        while(count<index){
            count++;
            cur=cur.next;
        }
        console.log(cur.data+"\n");
    }
    clearList(){
        this.head=null;
        this.size=0;
    }
    printList(){
        let cur=this.head;
        while(cur){
            console.log(cur.data)
            cur=cur.next;
        }
        console.log("Size is "+this.size);
    }
}

let ll=new LinkedList();
ll.insertatFirst(200);
ll.insertatFirst(100);
ll.insertatFirst(300);
ll.insertatFirst(400);
ll.insertatLast(400);
ll.insertatIndex(500,2);
ll.removeatIndex(0);
ll.getatIndex(2);
ll.clearList();
ll.printList();