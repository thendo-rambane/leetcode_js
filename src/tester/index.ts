import testRunner from "./testRunner"
import {TestFunc, ITestCase} from "./tester"

export default testRunner;
export const testing = <E>(
  func: TestFunc<E>, 
  fileName: string = ""
) => {
  return testRunner.testing(func)
}

export function equal<I>(
  input: I, 
  expect: I
): ITestCase<I> {
  return {
    input,
    expect
  }
}

