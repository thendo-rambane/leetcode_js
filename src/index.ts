import runningSum from "./leetcode1480_runningSums"
import pivotIndex from "./leetcode724_pivotIndex"
import isoString from "./leetcode205_isomorphicStrings"
import isSubsequence from "./leetcode392_isSubsequence"
import mergeTwoLists from "./leetcode21_mergeSortedLists"
import reverseLinkedList from "./leetcode206_reverseLinkedList"
import middleNode from "./leetcode876_middleOfTheLinkedList"
import testRunner from "./tester"


function main() {
  runningSum();
  pivotIndex();
  isoString();
  isSubsequence();
  mergeTwoLists();
  reverseLinkedList();
  middleNode();
  testRunner.run();
}
main();

