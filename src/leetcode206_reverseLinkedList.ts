import { ListNode, list } from "./linkedList";
import { testing, equal } from "./tester"

function reverseList(head: ListNode | null): ListNode | null {
    let current: ListNode|null = head;
    let prev = null
    while (current) {
      [current.next, prev, current] = [prev, current, current.next]
    }
    return prev
}

export default function test() {
  testing(reverseList)
    .test(equal(reverseList(list([1,2,3,4,5])), list([5,4,3,2,1])))
    .test(equal(reverseList(list([1,2,3])), list([3,2,1])))
    .test(equal(reverseList(list([1, 2])), list([2, 1])))
    .test(equal(reverseList(list([])), list([])))

}
