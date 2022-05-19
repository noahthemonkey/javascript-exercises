const caesar = function(word, number) {
 /**take the given word turn each character it into its charcode and + the given amount of increase for each letter 
  * 
  * MAKE IT LOOP AROUND THE APLHABET\
 */
 let wordCode = [];
 let encryptedCode = [];
 let encryptedWord = [];
 let newWord = [];
 let ignore;
 const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    for(i = 0; i < word.length; i++){
        if( word.charAt(i) === "!" || word.charAt(i) === " " || word.charAt(i) === "," || word.charAt(i) === "?"  ){
            wordCode = word.charCodeAt(i)
            encryptedCode.push((String.fromCharCode(wordCode)))
            newWord = encryptedCode.join("");}
        else {
        wordCode = word.charCodeAt(i) + number
        encryptedCode.push((String.fromCharCode(wordCode)))
        newWord = encryptedCode.join("");
        console.log(newWord)
        }
    }

    console.table(newWord)
    return newWord
};

// Do not edit below this line
module.exports = caesar;
