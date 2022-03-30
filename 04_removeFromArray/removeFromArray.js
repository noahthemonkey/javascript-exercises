const removeFromArray = function(myArray, ...theArgs) {   

    const theArray = myArray.filter(removeThese); 

    function removeThese(value){
        return !theArgs.includes(value);
    }
    return theArray;
}


removeFromArray([1, 2, 3, 4], 3, 2);
// Do not edit below this line
module.exports = removeFromArray;
