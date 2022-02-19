"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singly_linked_list_node_1 = require("./singly-linked-list-node");
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
    addToHead(data) {
        const newHead = new singly_linked_list_node_1.default(data);
        const currentHead = this.head;
        this.head = newHead;
        if (currentHead)
            this.head.setNextNode(currentHead);
    }
    addToTail(data) {
        let tail = this.head;
        if (!tail) {
            this.head = new singly_linked_list_node_1.default(data);
            return;
        }
        while (tail === null || tail === void 0 ? void 0 : tail.getNextNode()) {
            tail = tail === null || tail === void 0 ? void 0 : tail.getNextNode();
        }
        tail === null || tail === void 0 ? void 0 : tail.setNextNode(new singly_linked_list_node_1.default(data));
    }
    getCurrentHead() {
        return this.head;
    }
    removeHead() {
        const removedHead = this.head;
        if (!removedHead)
            return;
        this.head = removedHead.getNextNode();
        return removedHead.getData();
    }
    printList() {
        let currentNode = this.head;
        let output = '<head>';
        while (currentNode) {
            output += currentNode.getData() + ' ';
            currentNode = currentNode.getNextNode();
        }
        output += '<tail>';
        console.log(output);
    }
}
exports.default = SinglyLinkedList;
//# sourceMappingURL=singly-linked-list.js.map