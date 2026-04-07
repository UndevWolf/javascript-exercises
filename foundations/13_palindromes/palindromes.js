const palindromes = function (string) {
    let stringParsed = string.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    let reversed = stringParsed.split("").reverse().join("");
    return stringParsed == reversed ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
