"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singly_linked_list_node_1 = require("../../linear-data-structures/singly-linked-list-node");
test('Initialize new node and get data', () => {
    const testNode = new singly_linked_list_node_1.default('Some String Data');
    expect(testNode).toBeInstanceOf(singly_linked_list_node_1.default);
    expect(testNode.getData()).toBe('Some String Data');
});
test('Set and access next node', () => {
    const testNode = new singly_linked_list_node_1.default(0);
    const nextNode = new singly_linked_list_node_1.default(1);
    testNode.setNextNode(nextNode);
    const expectedNext = testNode.getNextNode();
    expect(expectedNext).not.toBe(null);
    expect(expectedNext).toBeInstanceOf(singly_linked_list_node_1.default);
    expect(testNode.getNextNode()).toBe(nextNode);
});
//# sourceMappingURL=singly-linked-list-node.test.js.map