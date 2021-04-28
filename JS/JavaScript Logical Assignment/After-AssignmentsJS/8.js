class Node {
	constructor(element) {
		this.element = element;
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}
	add(element) {
		var node = new Node(element);
		var current;
		if (this.head == null)
			this.head = node;
		else {
			current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this.size++;
	}
	printList() {
		var curr = this.head;
		var str = "";
		while (curr) {
			str += curr.element + " ";
			curr = curr.next;
		}
		console.log(str);
	}

}
var ll = new LinkedList();

ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

ll.printList();