const sumAll = function(intOne, intTwo) {

    if (intOne < 0 || intTwo < 0 || typeof intOne != "number" || typeof intTwo != "number" || !Number.isInteger(intOne) || !Number.isInteger(intTwo)) {
        return "ERROR";
    }

    if (intOne > intTwo) {
        let temp = intOne;
        intOne = intTwo;
        intTwo = temp;
    }

    let sum = 0;
    for (let i = intOne; i <= intTwo; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
