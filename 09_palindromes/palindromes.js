const palindromes = function (word) {
    let re = /[\W_]/g;
    let wordtoLow = word.toLowerCase().replace(re, '');

    reverseWord = wordtoLow.split('').reverse().join('');
    return reverseWord === wordtoLow
};

// Do not edit below this line
module.exports = palindromes;
