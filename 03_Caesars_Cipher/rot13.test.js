const rot13 = require("./index");

test("Decoded shift cipher string", () => {
    expect(rot13("SERR PBQR PNZC"))
        .toMatch("FREE CODE CAMP");
    expect(rot13("SERR CVMMN!"))
        .toMatch("FREE PIZZA!");
    expect(rot13("SERR YBIR?"))
        .toMatch("FREE LOVE?");
    expect(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))
        .toMatch("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
});