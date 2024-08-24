const palindromes = function (str) {
    // let text = str.toLowerCase();
    // text = text.replaceAll(" ", "");
    // text = text.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g, "");
    // return text.split("").reverse().toString().replaceAll(",", "") === text;

    const alphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanedStr = str
    .toLowerCase()
    .split('')
    .filter((char) => alphanumeric.includes(char))
    .join("");

    const reversed = cleanedStr.split("").reverse().join("");

    return cleanedStr === reversed;
};

// Do not edit below this line
module.exports = palindromes;
