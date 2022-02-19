"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singly_linked_list_1 = require("../../linear-data-structures/singly-linked-list");
const singly_linked_list_node_1 = require("../../linear-data-structures/singly-linked-list-node");
test('Initialize new list', () => {
    const testList = new singly_linked_list_1.default();
    expect(testList.removeHead()).toBeFalsy();
});
test('Add to head', () => {
    const testList = new singly_linked_list_1.default();
    const newHead = new singly_linked_list_node_1.default('Summer');
    testList.addToHead(newHead);
    expect(testList.removeHead()).toBe(newHead);
});
test('Add to tail', () => {
    var _a;
    const testList = new singly_linked_list_1.default();
    const newHead = new singly_linked_list_node_1.default('Spring');
    const newTail = new singly_linked_list_node_1.default('Summer');
    testList.addToHead(newHead);
    testList.addToTail(newTail);
    expect((_a = testList.getCurrentHead()) === null || _a === void 0 ? void 0 : _a.getNextNode()).toBe(newTail);
});
//# sourceMappingURL=singly-linked-list.test.js.map