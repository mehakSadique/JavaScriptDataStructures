class LinkedList {
    constructor() {
        this.head = null; // The first element (node) of the list
        this.tail = null; // The last element (node) of the list
    }

    append(value) {
        // Create a new node that holds the value and sets 'next' as null
        const newNode = { value: value, next: null };

        // If tail exists, update its 'next' pointer to the new node
        if (this.tail) {
            this.tail.next = newNode;
        }

        // Set the new node as the new tail
        this.tail = newNode;

        // If head is null (list is empty), set head to the new node
        if (!this.head) {
            this.head = newNode;
        }
    }

    // Convert the linked list into an array starting from the head
    toArray() {
        const elements = [];
        let curNode = this.head; // Start traversal from the head

        // Traverse the linked list and push each node's value into the array
        while (curNode) {
            elements.push(curNode.value); // Push only the value, not the node object
            curNode = curNode.next; // Move to the next node
        }
        return elements;
    }
    prepend(value){
        // Create a new node that holds the value and sets 'next' as head 
        const newNode={value:value, next: this.head}
       
       
         // If tail is null (list is empty), set head to the new node
        if(!this.tail){
            this.tail=newNode
        }
        // set the newNode as head
        this.head=newNode;

    
    }
    //find value and inseret after that value is found
    insertAfter(value,afterValue){
        //fint existing node with find method
        const existingNode= this.find(afterValue);
        //if it exists then value is value and the next value becomes the existing node
        if(existingNode){
            const newNode={value:value, next: existingNode.next}
            existingNode.next=newNode;
        }
    }
    find(value){
        if(!this.head){
            return;
    }  
    //start off with the current node  being head
    let curNode=this.head;
    //while current znofr ig the current node is the value you are looking for the retturn the current Node
    while(curNode){
        if(curNode.value === value){
            return curNode;
        }
        //if not set the current node as the next and it will keep looping until founf
        curNode=curNode.next;
    }
    return null;
    }
    //this should delete all the nodes that equal to that value
    delete(value){

        //if head is empty retun nothing or error
        if(!this.head){
            return;
    }
    // in the excepition that the value is the head the iterate in a while loop to read the next node
    while(this.head && this.head.value === value){
        this.head= this.head.next;
    }
    //read the current node as head
    let curNode=this.head;
    //the node after head is true 
        while(curNode.next){
            //if the value of next node equals to the value of what we are looking for then assign the next value to the value after that
            if(curNode.next.value === value){
                curNode.next=curNode.next.next;
            }
            else{
                // if the value is not the next value then continue on in the loop
                curNode=curNode.next
            }
        }
        // if tail is the value then set tail as head
        if(this.tail === value){
            this.tail=curNode;
        }
    }
}

// Creating an instance of LinkedList
const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append('hello there');
linkedList1.append('Max');
linkedList1.append('Max');
linkedList1.append(true);
linkedList1.append(18.51);
linkedList1.prepend('Mehak');
linkedList1.prepend('Mehak');
console.log(linkedList1.toArray());
linkedList1.delete('Max')
linkedList1.delete('Mehak');
linkedList1.delete(18.51);
console.log(linkedList1.toArray()); // Outputs an array of values from the linked list
console.log(linkedList1.find('Max'));
console.log(linkedList1.find('hello there'));
linkedList1.insertAfter('new value -1',1 )
linkedList1.insertAfter('new value -2','hello there' );
console.log(linkedList1.toArray()); 