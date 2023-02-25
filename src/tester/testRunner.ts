import Tester, {ITestCase, TestFunc} from "./tester"
class TestRunner {
  private _testers: Array<Tester<any>>;
  private get testers(): Array<Tester<any>> {
    return this._testers;
  };

  private _testIndex: number;
  private get testIndex() : number {
    return this._testIndex;
  }

  constructor() {
    this._testers = new Array<Tester<any>>();
    this._testIndex = -1;
  }


  public addTests(
    testFunction: TestFunc<any>
  ): void {
      this.testers.push(
        new Tester(testFunction)
      );
  }

  public testing(
    testFunction: TestFunc<any>
  ) : TestRunner {
    this.testers.push(
     new Tester(testFunction)
    )
    this._testIndex += 1;
    return this;
  }

  public test(testCase:ITestCase<any>) {
    if (this.testIndex < 0) {
      throw new Error("Please Initialise the test with tester")
    }
    this.testers[this.testIndex]
    .addTestCase(testCase.input, testCase.expect)
    return this
  }

  public run(): void {
    this.testers.forEach(tester => {
      tester.runTests();
    })
  }
}

let testRunner : TestRunner | null = null;
function initTestRunner() {
  if (!testRunner) {
    return new TestRunner()
  }
  return testRunner
}

export default initTestRunner();
