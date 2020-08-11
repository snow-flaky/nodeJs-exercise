// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

    var vowelMap = 0;


    for (let element = 0; element < str.length; element++) {
        if (str[element] === 'a' || str[element] === 'e' || str[element] === 'i' || str[element] === 'o' || str[element] === 'u' || str[element] === 'A' || str[element] === 'E' || str[element] === 'I' || str[element] === 'O' || str[element] === 'U') {
            vowelMap = vowelMap + 1;
        }
    }

    return vowelMap;

}

module.exports = vowels;