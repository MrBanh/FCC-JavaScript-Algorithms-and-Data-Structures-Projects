const palindrome = require("./index");

test("Palindrome", () => {
    expect(palindrome("eye")).toBeTruthy();
    expect(palindrome("_eye")).toBeTruthy();
    expect(palindrome("race car")).toBeTruthy();
    expect(palindrome("A man, a plan, a canal. Panama")).toBeTruthy();
    expect(palindrome("never odd or even")).toBeTruthy();
    expect(palindrome("My age is 0, 0 si ega ym.")).toBeTruthy();
    expect(palindrome("0_0 (: /-\ :) 0-0")).toBeTruthy();
});

test("Not Palindrome", () => {
    expect(palindrome("not a palindrome")).toBeFalsy();
    expect(palindrome("nope")).toBeFalsy();
    expect(palindrome("almostomla")).toBeFalsy();
    expect(palindrome("1 eye for of 1 eye.")).toBeFalsy();
    expect(palindrome("five|\_/|four")).toBeFalsy();
});