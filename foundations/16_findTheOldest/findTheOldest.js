const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    return people.sort((a,b) => {
        if (!a.yearOfDeath) a.yearOfDeath = currentYear;
        if (!b.yearOfDeath) b.yearOfDeath = currentYear;
        const first = a.yearOfDeath - a.yearOfBirth;
        const second = b.yearOfDeath - b.yearOfBirth;
        return first > second ? -1: 1;
    })
    .shift();
    
};

// Do not edit below this line
module.exports = findTheOldest;
