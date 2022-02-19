"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SllNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
    setNextNode(node) {
        if (node instanceof SllNode || node === null) {
            this.next = node;
            return;
        }
        throw new Error('New Node is not of type SllNode');
    }
    getNextNode() {
        return this.next;
    }
    getData() {
        return this.data;
    }
}
exports.default = SllNode;
//# sourceMappingURL=singly-linked-list-node.js.map