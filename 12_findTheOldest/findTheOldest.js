const findTheOldest = function(array) {
    let age = 0;
    let oldest = {};
    const date = new Date();
    currentYear = date.getFullYear();

    oldestPerson = array.reduce((previous, current) => {
        let birthYear = current.yearOfBirth
        let deathYear = current.yearOfDeath || undefined
        let currentYear = (new Date().getFullYear());
        if (deathYear === undefined) {
            age = currentYear - birthYear;
            oldest = current
        } else if((deathYear - birthYear) > age){
            age = deathYear - birthYear
            oldest = current
        }

    

    return previous;
    }, 0)
    console.log(oldest)
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
