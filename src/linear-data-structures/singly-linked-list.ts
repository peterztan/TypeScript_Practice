import SllNode from './singly-linked-list-node';

export default class SinglyLinkedList {
  private head: null | SllNode;

  constructor() {
    this.head = null;
  }

  public addToHead(data: unknown) {
    const newHead = new SllNode(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) this.head.setNextNode(currentHead);
  }

  public addToTail(data: unknown) {
    let tail = this.head;
    if (!tail) {
      this.head = new SllNode(data);
      return;
    }

    while (tail?.getNextNode()) {
      tail = tail?.getNextNode();
    }

    tail?.setNextNode(new SllNode(data));
  }

  public getCurrentHead() {
    return this.head;
  }

  public removeHead() {
    const removedHead = this.head;
    if (!removedHead) return;
    this.head = removedHead.getNextNode();
    return removedHead.getData();
  }

  public printList() {
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
