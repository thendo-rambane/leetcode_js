import {ListNode, LinkedList} from "./linkedList"

export const ScreenColour =  {
  blue: (str: string)  => {
    return `\x1b[33m${str}\x1b[0m`;
  },
  green: (str: string)  => {
    return `\x1b[32m${str}\x1b[0m`;
  },
  red: (str: string) =>  {
    return `\x1b[31m${str}\x1b[0m`;
  }
}

function isArrayEqual<T>(arr1: Array<T>, arr2: Array<T>) :boolean {
  if (arr1.length=== arr2.length) {
    for (let indx = 0; indx < arr1.length; indx++){
      if (arr1[indx] !== arr2[indx]) {
        return false;
      }
    }
    return true;
  }
  return false
}

export function isEqual<T>(val1: T, val2:T) : boolean {
  if (val1 instanceof Array && val2 instanceof Array) {
    return isArrayEqual(val1, val2);
  }
  if (val1 instanceof ListNode && val2 instanceof ListNode) {
    return LinkedList.isEqual(val1, val2)
  }
  return val1 === val2;
}


