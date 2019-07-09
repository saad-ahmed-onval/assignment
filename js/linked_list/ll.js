

// User defined class node
class Node {
    // constructor
    constructor(element) 
    {
        this.line = element; 
        this.next = null
    }
}

// linkedlist class
class LinkedList {
    constructor(name)
    {
        this.name = name
        this.head = null
        this.last = this.head
        this.size = 0
    }

    // functions to be implemented
    // append(element)
    // insertAt(element, location)
    // removeFrom(location)
    // removeElement(element)

    // Helper Methods
    // isEmpty
    // size_Of_List
    // PrintList

append(element)
{
    // creates a new node
    var node = new Node(element);
    // to store current node
    var current;
    // if list is Empty append the element and make it head
    if (this.head == null)
        this.head = node;
    else {
        current = this.head;
        // iterate to the end of the list
        while (current.next) {
            current = current.next;
        }
        // append node
        current.next = node;
    }
    this.size++;
}

// insert element at the position index 
// of the list 
insertAt(element, index) 
{
    if (this.isEmpty() && index > 0 && index > this.size) 
        return false;
    else {
        // creates a new node
        var node = new Node(element);
        var curr, prev;

        curr = this.head;

        // append the element to the
        // first index
        if (index == 0) {
            node.next = head;
            this.head = node;
        } else {
            curr = this.head;
            var it = 0;

            // iterate over the list to find
            // the position to insert
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }

            // appending an element
            node.next = curr;
            prev.next = node;
        }
        this.size++;
    }
}

// removes an element from the specified location
deleteFrom(index)
{
    if (index > 0 && index > this.size)
        return -1;
    else {
        var curr, prev, it = 0;
        curr = this.head;
        prev = curr;
        // deleting first element
        if (index == 0) {
            this.head = curr.next;
        } else {
            // iterate over the list to the position to remove an element
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }
            // remove the element
            prev.next = curr.next;
        }
        this.size--;
        // return the remove element
        return curr.element;
    }
}
// checks the list for empty 
isEmpty()
{
    return this.size == 0;
}
// gives the size of the list
size_of_list()
{
    console.log(this.size);
}
// prints the list items
printList()
{
    var curr = this.head;
    var str = "";
    while (curr) {
        str += curr.element + " ";
        curr = curr.next;
    }
    console.log(str);
}
}
// creating an object for the
// Linkedlist class
var ll = new LinkedList();

// testing isEmpty on an empty list
// returns true
console.log("is empty? "+ll.isEmpty());

ll.append(10)
console.log(ll.size_of_list());

ll.append(20);
console.log("abc")
ll.append(30);
ll.append(40);
ll.append(50);

ll.printList();

// prints 50 from the list
console.log("is element removed ?" )
//ll.removeElement(50)

// prints 10 20 30 40
ll.printList();

// returns 3
//console.log("Index of 40 " + ll.indexOf(40));

// insert 60 at second position
// ll contains 10 20 60 30 40
ll.insertAt(60, 2);

ll.printList();

// returns false
console.log("is List Empty ? " + ll.isEmpty());

// remove 3rd element from the list
console.log(ll.deleteFrom(3));

// prints 10 20 60 40
//ll.printList();

console.log("Linked List: ")
ll.printList()

//----------------------------------------------

var fs = require("fs"); //import the file stream (fs) package
var rl = require("readline")
var f="a" //file name to be set
var data= ll.Node
var msg="kg"
//var prompts = rl.createInterface(process.stdin, process.stdout)
console.log(msg)

f="D:\\training-workspace\\assignment\\js\\book_mgmt\\files\\"+f+".txt" // appending extension to the file name
//-----------------------------------
async function writeToFile (path, data) {  
    const json = JSON.stringify(data, null, 2)
  
    try {
      await Fs.writeFile(path, json)
      console.log('Saved data to file.')
    } catch (error) {
      console.error(error)
    }
  }