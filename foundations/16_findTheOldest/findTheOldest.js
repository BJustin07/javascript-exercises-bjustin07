const findTheOldest = function(peopleArr) {
    const currentYear = new Date().getFullYear();
    const sortedPeople = peopleArr
        .map(person => {
            return {
                name: person.name,
                age: person.yearOfDeath === undefined ? 
                (currentYear - person.yearOfBirth) : (person.yearOfDeath - person.yearOfBirth)
            }
        })
        .sort((a,b) => b.age - a.age)
    return sortedPeople[0]

};

// Do not edit below this line
module.exports = findTheOldest;
