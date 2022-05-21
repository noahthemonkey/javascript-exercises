const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lower = 'abcdefghijklmnopqrstuvwxyz'




const caesar = function(word, number) {

    let text = '';
    var numMod = function numMod(n, m) {
        return ((n % m) + m) % m;
      }

    for(i = 0; i < word.length; i++){
    var letter = word[i];

    if(upper.includes(letter)) {
        // if it contains an uppercase charcter, add the number of shifts to it. If it exceeds MAX or MIN for UPPER then add or subtract from the beginning or the end.
        let letterShift = numMod((upper.indexOf(letter) + number), 26)
        text += upper[letterShift]

    }else if(lower.includes(letter)) {
         // if it contains an lowercase charcter, add the number of shifts to it. If it exceeds MAX or MIN for LOWER add or subtract from the beginning or the end.
        let letterShift = numMod((lower.indexOf(letter) + number), 26)
        text += lower[letterShift]
         
    }else {
        // ignore all other characters.
        text += letter
        }  
    
    }
    console.log(text)
    return(text) 
};
// Do not edit below this line
module.exports = caesar;
