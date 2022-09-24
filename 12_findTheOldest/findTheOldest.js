const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        let personDeathYear = (person.yearOfDeath)? person.yearOfDeath: new Date().getFullYear();
        let oldestDeathYear = (oldest.yearOfDeath)? oldest.yearOfDeath: new Date().getFullYear();
        if((oldestDeathYear-oldest.yearOfBirth) < (personDeathYear-person.yearOfBirth)) {
            oldest = person;
        }
        return oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
