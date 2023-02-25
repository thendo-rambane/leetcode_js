import { ListNode, list } from "./linkedList";
import { equal, testing } from "./tester"

function middleNode(head: ListNode | null): ListNode | null {
  if (!head) return head;
  let node : ListNode | null = head;
  let count = 0;
  while(node) {
    node = node.next;
    count++;
  }
  const len = count
  while (count > Math.round(len/2) && head) {
    head = head.next
    count--;
  }

  return head;
};

export default function test() {
  testing(middleNode)
    .test(equal(middleNode(list([1,2,3,4,5])), list([3,4,5])))
    .test(equal(middleNode(list([1,2,3,4,5,6])), list([4,5,6])))
}
