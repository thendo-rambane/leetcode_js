export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val || 0;
    this.next = next || null;
  }

  toString() {
    let list: number[] = [];
    let head: ListNode | null = new ListNode(this.val, this.next) ;
    while (head) {
      list.push(head.val);
      head = head.next;
    }
    return list.toString();
  }
}

export class LinkedList {
  head: ListNode | null;
  constructor(arr: number[]){
    this.head = arr.length ? new ListNode(arr[0]) : null;
    if (!this.head) return;
    let curr = this.head;
    for (let indx = 1; indx < arr.length; ++indx) {
      curr.next = new ListNode(arr[indx]);
      curr = curr.next;
    }
  }

  public static isEqual(lhs: ListNode | null, rhs: ListNode | null) {
    let l1 = lhs;
    let l2 = rhs;
    while (l1 && l2) {
      if (l1.val !== l2.val) return false;
      l1 = l1.next;
      l2 = l2.next;
    }
    return !l1 && !l2;
  }

}

export function list(arr: number[]) {
  return (new LinkedList(arr)).head
}
