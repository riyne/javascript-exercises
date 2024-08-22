const reverseString = function(str) {
    // let input = str.toString();
    // let res = '';
    // for (let i = input.length - 1; i > -1; i--) {
    //     res = res + input.charAt(i);
    //     console.log(`res after an ${i}th iteration: ${res}`)
    // }
    // return res;
    return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
