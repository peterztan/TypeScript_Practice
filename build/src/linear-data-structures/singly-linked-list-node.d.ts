export default class SllNode {
    private data;
    private next;
    constructor(data: unknown);
    setNextNode(node: SllNode): void;
    getNextNode(): SllNode | null;
    getData(): unknown;
}
