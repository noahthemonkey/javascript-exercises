const removeFromArray = function(myArray, num) {
    var myArray = [1, 2, 3, 4];
    var values = [num] ;
    myArray = myArray.filter(item => !values.indexOf(item) === -1);
    
    return myArray;
    }



removeFromArray([1, 2, 3, 4], 3, 2);
// Do not edit below this line
module.exports = removeFromArray;
