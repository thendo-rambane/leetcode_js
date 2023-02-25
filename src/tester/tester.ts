import {isEqual, ScreenColour} from "../utility";

export interface ITestCase<TestCase> {
  input: TestCase,
  expect: TestCase
}

export type TestFunc<E> = (...args: any[]) => E;

export default class Tester<I> {
  private _testCases: ITestCase<I>[];
  private _testFunction: TestFunc<I>;

  private get testCases(): ITestCase<I>[] {
    return this._testCases;
  }
  private get testFunction(): TestFunc<I> {
    return this._testFunction;
  }

  private get testFunctionName(): string {
    return this._testFunction.name
  }

  constructor(testFunction: TestFunc<I> ) {
    this._testCases = [];
    this._testFunction = testFunction
  }

  public addTestCase(
    input: I, 
    expect:I
  ) : void {
    this.testCases.push({
      input, 
      expect
    })
  }

  public runTests(){
    console.log(
      ScreenColour
        .blue(`TESTING: ${this.testFunctionName}`), 
      `TEST CASES: ${this.testCases.length}`
        );
    let fails = 0;
    this.testCases.forEach(( testCase, indx ) => {
        const testResult = isEqual(testCase.input, testCase.expect) ;
        const pass = ScreenColour.green("PASS");
        const fail = ScreenColour.red("FAIL");
        const name = `${this.testFunctionName} [Test Case ${indx + 1}]:`;
        const testResultString = `${name} ${testResult ? pass : fail}`;
        console.log(testResultString); 
        if (!testResult) {
          console.log("\tExpected: ", String( testCase.expect ))
          console.log("\tFound   : ", String( testCase.input ))
          ++fails;
        }
      }
    );
    console.log(
      ScreenColour.blue(`DONE: ${this.testFunctionName}`),
      `PASSED ${ScreenColour.green( ( this.testCases.length - fails ).toString() )}`,
      fails ? `| FAILED ${ScreenColour.red(fails.toString())}` : ""
    );
  }
}
