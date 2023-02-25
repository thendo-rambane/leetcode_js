import runningSum from "./leetcode1480_runningSums"
import pivotIndex from "./leetcode724_pivotIndex"
import isoString from "./leetcode205_isomorphicStrings"
import isSubsequence from "./leetcode392_isSubsequence"
import reverseLinkedList from "./leetcode206_reverseLinkedList"
import testRunner from "./tester"


function main() {
  runningSum();
  pivotIndex();
  isoString();
  isSubsequence();
  reverseLinkedList();
  testRunner.run();
}
main();

