class SLL {
     // constructor, other methods, removed for brevity
     addFront(value) {
    	newNode = new Node(value);
        newNode.newNode = this.head;
        this.head = newNode
        return this
    }
 }

 class SLL {
    // constructor, other methods, removed for brevity
     removeFront() {
        if(this.head) {
            this.head = this.head.next;
        }
        return this.head;
    }
}

class SLL {
    // constructor, other methods, removed for brevity
     front() {
        if(this.head) {
            return this.head.value;
        }
        return null;
    }
 }