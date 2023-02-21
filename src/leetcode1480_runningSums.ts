import {createTestCase, runTests} from "./utility";
import path from "path";

function runningSum(nums: number[]): number[] {
    return nums.reduce(
      (acc, curr, indx) => ( [...acc, (acc.at(indx - 1) || 0)+curr] ), 
      new Array<number>()
    )
};

export default function runningSumsTest() {
  const testCases = [
    {
     input: [1,2,3,4],
     expect: [1,3,6,10]
    },
    {
     input: [1,1,1,1,1],
     expect: [1,2,3,4,5]
    },
    {
     input: [3,1,2,10,1],
     expect: [3,4,6,16,17]
    },
  ]

  runTests(testCases, runningSum, path.basename(__filename));
}
