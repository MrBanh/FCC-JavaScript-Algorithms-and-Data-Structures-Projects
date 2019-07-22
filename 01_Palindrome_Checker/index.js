// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/

function palindrome(str) {
    // Remove non-alphanumeric characters (punctuation, spaces, symbols)
    let newStr = str.replace(/\W|_/g, '');

    // Turn everything to lower or upper case
    newStr = newStr.toLowerCase();

    /**
     * Function is used to test if the string is a palindrome
     * @param {*} s     // string
     * @param {*} low   // index to access the left side of string
     * @param {*} high  // index to access the right side of string
     * @returns         // True if palindrome, false otherwise
     */
    const isPalindrome = (s, low, high) => {
        // Base case, exhausted the string
        if (high <= low) {
            return true;
        } else if (s[low] !== s[high]) {
            // If at any point the characters do not match from both ends, return false
            return false;
        } else {
            // Recursively call function
            return isPalindrome(s, low + 1, high - 1);
        }
    }

    // Test if it is a palindrome and return
    return isPalindrome(newStr, 0, newStr.length - 1);
}

module.exports = palindrome;