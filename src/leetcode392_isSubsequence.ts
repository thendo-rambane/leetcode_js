import {testing, equal} from "./tester"

function isSubsequence(s: string, t: string): boolean {
    if (s === t) return true;
    if (s.length > t.length) return false;
    let sInd = 0;
    for (let i = 0; i < t.length; i++) {
        if (s[sInd] === t[i]) {
            sInd++
            if (sInd === s.length) {
                return true
            }
        }

    }
    return sInd === s.length
};

export default function test() {
  testing(isSubsequence)
    .test(equal(isSubsequence("abc", "ahbgdc"), true))
    .test(equal(isSubsequence("axc", "ahbgdc"), false))
}

