function getAge(birth, death) {
    if (!death) {
        let today = new Date().getFullYear();
        return today - birth;
    }
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, curr) => {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currAge = getAge(curr.yearOfBirth, curr.yearOfDeath);
        return oldestAge > currAge ? oldest : curr;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
