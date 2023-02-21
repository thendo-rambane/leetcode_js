import {createTestCase, runTests} from "./utility";
import path from "path";

function pivotIndex(nums: number[]): number {
  let output = -1
  for (let idx = 0; idx < nums.length; idx++){
    const left = nums.slice(0, idx).reduce((acc, val) => acc + val, 0);
    const right = nums.slice(idx + 1, nums.length)
      .reduce((acc, val) => acc + val, 0);
    if (right === left) {
      output = idx;
      break;
    }
  }
  return output
};


export default function testPivotIndex() {
  const testCases = [
    createTestCase([1,7,3,6,5,6], 3), 
    createTestCase([1,2,3], -1), 
    createTestCase([2,1,-1], 0)
  ]
  runTests(testCases, pivotIndex, path.basename(__filename));
}

