export default class SllNode {
  private data: unknown;
  private next: null | SllNode;

  constructor(data: unknown) {
    this.data = data;
    this.next = null;
  }

  public setNextNode(node: SllNode) {
    if (node instanceof SllNode || node === null) {
      this.next = node;
      return;
    }
    throw new Error('New Node is not of type SllNode');
  }

  public getNextNode() {
    return this.next;
  }

  public getData() {
    return this.data;
  }
}
