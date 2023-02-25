import {testing, equal} from "./tester";

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
  testing(pivotIndex)
  .test(equal(pivotIndex( [1,7,3,6,5,6] ), 3))
  .test(equal(pivotIndex( [1,2,3] ), -1)) 
  .test(equal(pivotIndex( [2,1,-1] ),0))
}

