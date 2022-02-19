import SinglyLinkedList from '../../linear-data-structures/singly-linked-list';
import SllNode from '../../linear-data-structures/singly-linked-list-node';

test('Initialize new list', () => {
  const testList = new SinglyLinkedList();
  expect(testList.removeHead()).toBeFalsy();
});

test('Add to head', () => {
  const testList = new SinglyLinkedList();
  const newHead = new SllNode('Summer');
  testList.addToHead(newHead);
  expect(testList.removeHead()).toBe(newHead);
});

test('Add to tail', () => {
  const testList = new SinglyLinkedList();
  const newHead = new SllNode('Spring');
  const newTail = new SllNode('Summer');
  testList.addToHead(newHead);
  testList.addToTail(newTail);
  expect(testList.getCurrentHead()?.getNextNode()).toBe(newTail);
});
