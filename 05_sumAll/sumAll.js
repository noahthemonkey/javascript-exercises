const sumAll = function sumthese(start, end){
    let result = 0;

    if (start > end) {
        for (let i = end; i <= start; i++) {
    
            result += i;
    
    
        }
    }
    else if (start < 0 || end < 0 ){
        return "ERROR";
}
    else if (typeof start === "string"  || typeof end === "string" || typeof start === "object" || typeof end === "object") {
        return "ERROR"
    }
    
    else {
        for (let i = start; i <= end; i++) {
    
            result += i;


        }
}
    return result;
}
// Do not edit below this line
module.exports = sumAll;
