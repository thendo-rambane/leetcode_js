import {testing, equal} from "./tester";
import path from "path";

function runningSum(nums: number[]): number[] {
    return nums.reduce(
      (acc, curr, indx) => ( [...acc, (acc.at(indx - 1) || 0)+curr] ), 
      new Array<number>()
    )
};

export default function runningSumsTest() {
  testing(runningSum)
    .test(equal(runningSum([1,2,3,4]), [1,3,6,10]))
    .test(equal(runningSum([1,1,1,1,1]), [1,2,3,4,5]))
    .test(equal(runningSum([3,1,2,10,1]), [3,4,6,16,17]))
}
