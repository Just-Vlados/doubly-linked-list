const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
    	this._head = null;
    	this._tail = null;
    }

    append(data) {
        var node = new Node(data);

        if (this.length == 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        if(this.head != null) {
            return this._head.data;
        } 
        return null;
    }

    tail() {
        if(this.length != 0) {
            return this._tail.data;
        }
        return null;
    }

    at(index) {
        var node = this._head;

        for(var i = 0; i < index; i++){
            node = node.next;
        } 
        return node.data;
    }

    insertAt(index, data) {
        var node = new Node(data);
        var count = 0;
        var current = this._head;
        var newNode;
        while(count < index) {
            current = current.next;
            count++;
        }
        if(current == null) {
            current = node;
        } else {
            node.prev = current.prev;
            node.next = current;
            current.prev = node;
        } if (node.prev != null) {
            node.prev.next = node;

        }

        this.length++;
        return this;
    }

    isEmpty() {
        if(this.length == 0)
            return true;
        else
            return false;
    }

    clear() {
        var node = this._head;
        var nextNode = node.next;
        do {
            node.data = null;
            node = nextNode;
            nextNode = nextNode.next;
        }
        while (nextNode != null);
        this.length = 0;
        return this;

    }

    deleteAt(index) {}

    reverse() {
        var node = this._head;
        var current = this._tail;
        for(var i = 0; i < this.length - 1; i += 2) {
            var temp = node.data;
            node.data = current.data;
            current.data = temp;
            node = node.next;
            current = current.prev;
        }

        return this;
    }

    indexOf(data) {}
}

module.exports = LinkedList;
