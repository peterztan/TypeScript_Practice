import SllNode from '../../linear-data-structures/singly-linked-list-node';

test('Initialize new node and get data', () => {
  const testNode = new SllNode('Some String Data');
  expect(testNode).toBeInstanceOf(SllNode);
  expect(testNode.getData()).toBe('Some String Data');
});

test('Set and access next node', () => {
  const testNode = new SllNode(0);
  const nextNode = new SllNode(1);
  testNode.setNextNode(nextNode);
  const expectedNext = testNode.getNextNode();
  expect(expectedNext).not.toBe(null);
  expect(expectedNext).toBeInstanceOf(SllNode);
  expect(testNode.getNextNode()).toBe(nextNode);
});
