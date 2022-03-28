const repeatString = function repeatStringNum (string, times) {
    var repeatedString = "";
    //Math.floor(Math.random() * 100)
    

    while (times > 0) {
        repeatedString += string;
        times--;

    }
    if (times < 0) {
        repeatedString = "ERROR"
    }
    return repeatedString
}

repeatString("", 3);
// Do not edit below this line
module.exports = repeatString;
