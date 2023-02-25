import {ListNode, list} from "./linkedList"
import {testing, equal} from "./tester"

function mergeTwoLists(
  list1: ListNode | null, 
  list2: ListNode | null
): ListNode | null {
  let [ pointer, list ] = (list1 && list2) ? list1.val <= list2.val ? 
        [list1, list2] : 
        [list2, list1] :
        [list1 ? list1 : list2, null];
  let head = pointer;
  let current = head;
  pointer = pointer?.next || null;
  while (pointer && list) {
    if (current) {
      if (pointer.val <= list.val) {
        current.next = pointer;
        current = current.next;
        pointer = pointer.next;
      } else {
        current.next = list;
        current = current.next;
        list = list.next;
      }
    } 
  }
  const node = pointer !== null ? pointer : list;
  if (current) 
    current.next = node
  return head;
};

export default function test() {
  testing(mergeTwoLists)
    .test(
      equal(
        mergeTwoLists(
          list([1,2,4]),
          list([1,3,4])
        ), 
        list([1,1,2,3,4,4] )
      ))
    .test(
      equal(
        mergeTwoLists(
          list([]),
          list([])
        ), 
        list( [] )
      ))
    .test(
      equal(
        mergeTwoLists(
          list([]),
          list([0])
        ), 
        list([0])
      ))
    .test(
      equal(
        mergeTwoLists(
          list([2]),
          list([1])
        ), 
        list([1, 2])
      ))
    .test(
      equal(
        mergeTwoLists(
          list([5]),
          list([1, 2, 4])
        ), 
        list( [1, 2, 4, 5] )
      ))
}


