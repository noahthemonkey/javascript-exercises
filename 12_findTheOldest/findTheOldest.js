const findTheOldest = function(array) {
    let age = 0;
    let oldest = {};
    const date = new Date();
    currentYear = date.getFullYear();

    oldestPerson = array.reduce((previous, current) => {
        let birthYear = current.yearOfBirth
        let deathYear = current.yearOfDeath || null
        let currentYear = (new Date().getFullYear());
        if (typeof deathYear === undefined) {
            age = currentYear - birthYear;
            oldest = current
        }
        if ((deathYear - birthYear) > age) {
            age = (deathYear || currentYear) - birthYear;
            oldest = current
        }

    return previous;
    }, 0)
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
