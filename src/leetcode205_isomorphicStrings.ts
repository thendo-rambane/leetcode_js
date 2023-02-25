import {testing, equal} from "./tester"

function isIsomorphic(s: string, t: string): boolean {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) !== t.indexOf(t[i])){
            return false
        }
    }
    return true
};

export default function test() {
  testing(isIsomorphic)
    .test(equal(isIsomorphic("egg", "add"), true))
    .test(equal(isIsomorphic("foo", "bar"), false))
    .test(equal(isIsomorphic("paper", "title"), true))
}
