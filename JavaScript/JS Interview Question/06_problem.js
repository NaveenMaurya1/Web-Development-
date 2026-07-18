// The Vowel Counter: You need to create a function that counts the number of 
// vowels in a given string. Consider both uppercase and lowercase vowels.

function vowelCounter1(string) {
    if (typeof string !== "string") {
        throw new TypeError("Input must be a string");
    }

    const matches = string.match(/[aeiou]/gi);
    return matches ? matches.length : 0; // Ternary Operator used
}

function vowelCounter2(string) {
    count = 0;

    // str.match(regexp) 
    const vowelRegex = /[aeiou]/i; // /[aeiou]/gi — The Regular Expression ,
    //  i — Case-Insensitive Flag:-Matches both lowercase (a) and uppercase (A) vowels.

    //     g — Global Flag
    // g stands for global.
    // Without g, .match() only returns the first match.
    // With g, it returns all matches in the string.
    
    for (const element of string) {
        if (vowelRegex.test(element)) {
            count++
        }
    }
    return count
}

a = "hEllo JI HarrY"
a1 = "hElloHarrY"

console.log(vowelCounter1(a));
console.log(vowelCounter2(a1));
