// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) { // LBH QVQ VG!
    let resultStr = [];
    const letterRegex = /[A-Z]/;

    for (let c of str) {
        if (!letterRegex.test(c)) {
            // Convert non-alphabetic characters to ascii and push to array
            resultStr.push(c.charCodeAt());
        } else {
            // Convert alphabetic characters to ascii and subtract 13 to decode
            let decodeAscii = c.charCodeAt() - 13;
            // Push decoded ascii value to array; test if it is < 65 (65 = 'A')
            resultStr.push(decodeAscii < 65 ? 91 - (65 - decodeAscii) : decodeAscii);
        }
    }

    // Convert all ascii values back to character
    return String.fromCharCode(...resultStr);
}


module.exports = rot13;