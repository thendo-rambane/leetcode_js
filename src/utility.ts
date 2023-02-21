function green(str: string) : string {
  return `\x1b[32m${str}\x1b[0m`;
}
function red(str: string) : string {
  return `\x1b[31m${str}\x1b[0m`;
}

export function isArrayEqual<T>(arr1: Array<T>, arr2: Array<T>) :boolean {
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

function isEqual<T>(val1: T, val2:T) : boolean {
  if (val1 instanceof Array && val2 instanceof Array) {
    return isArrayEqual(val1, val2);
  }
  return val1 === val2;
}

interface ITestCase<I, E> {
  input: I,
  expect: E
}

export function createTestCase<I, E>(input: I, expect: E): ITestCase<I, E> {
  return {
    input,
    expect
  }
}

export function runTests<I, E>(
  testCases: ITestCase<I,E>[], 
  tester: (input: I) => E, 
  fileName: string | undefined = undefined
){
  testCases.forEach(( testCase, indx ) => {
      const output = tester( testCase.input );
      const testResult = isEqual(output, testCase.expect) ;
      console.log(`${fileName}: ${tester.name} [Test Case ${indx + 1}]:  ${testResult ? green("PASS") : red("FAIL") } `) 
      if (!testResult) {
        console.log("\tExpected: ", testCase.expect)
        console.log("\tFound   : ", output)
      }
    }
  );
}
