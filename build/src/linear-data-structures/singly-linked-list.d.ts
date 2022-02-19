import SllNode from './singly-linked-list-node';
export default class SinglyLinkedList {
    private head;
    constructor();
    addToHead(data: unknown): void;
    addToTail(data: unknown): void;
    getCurrentHead(): SllNode | null;
    removeHead(): unknown;
    printList(): void;
}
