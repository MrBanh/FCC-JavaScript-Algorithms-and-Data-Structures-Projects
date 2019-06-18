// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker
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