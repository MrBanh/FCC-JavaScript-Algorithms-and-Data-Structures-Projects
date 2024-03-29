const telephoneCheck = require("./index");

test("Validate telephone numbers", () => {
    expect(telephoneCheck("1 555-555-5555")).toBeTruthy();
    expect(telephoneCheck("1 (555) 555-5555")).toBeTruthy();
    expect(telephoneCheck("5555555555")).toBeTruthy();
    expect(telephoneCheck("555-555-5555")).toBeTruthy();
    expect(telephoneCheck("(555)555-5555")).toBeTruthy();
    expect(telephoneCheck("1(555)555-5555")).toBeTruthy();
    expect(telephoneCheck("1 555 555 5555")).toBeTruthy();
    expect(telephoneCheck("1 456 789 4444")).toBeTruthy();
});

test("Invalid telephone numbers", () => {
    expect(telephoneCheck("555-5555")).toBeFalsy();
    expect(telephoneCheck("5555555")).toBeFalsy();
    expect(telephoneCheck("1 555)555-5555")).toBeFalsy();
    expect(telephoneCheck("123**&!!asdf#")).toBeFalsy();
    expect(telephoneCheck("55555555")).toBeFalsy();
    expect(telephoneCheck("(6054756961)")).toBeFalsy();
    expect(telephoneCheck("2 (757) 622-7382")).toBeFalsy();
    expect(telephoneCheck("0 (757) 622-7382")).toBeFalsy();
    expect(telephoneCheck("-1 (757) 622-7382")).toBeFalsy();
    expect(telephoneCheck("2 757 622-7382")).toBeFalsy();
    expect(telephoneCheck("10 (757) 622-7382")).toBeFalsy();
    expect(telephoneCheck("27576227382")).toBeFalsy();
    expect(telephoneCheck("(275)76227382")).toBeFalsy();
    expect(telephoneCheck("2(757)6227382")).toBeFalsy();
    expect(telephoneCheck("2(757)622-7382")).toBeFalsy();
    expect(telephoneCheck("555)-555-5555")).toBeFalsy();
    expect(telephoneCheck("(555-555-5555")).toBeFalsy();
    expect(telephoneCheck("(555)5(55?)-5555")).toBeFalsy();
});
