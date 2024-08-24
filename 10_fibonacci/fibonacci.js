const fibonacci = function(idx) {
    idx = Number(idx);
    if (idx === 0) {
        return 0;
    }
    if (idx === 1 || idx === 2) {
        return 1;
    }

    let acc = undefined;
    let arr = [1, 1];
    let lastEdited = 1;
    while (idx > 2) {
        acc = arr[0] + arr[1];
        if (lastEdited === 1) {
            arr[0] = acc;
            lastEdited = 0;
        } else {
            arr[1] = acc;
            lastEdited = 1;
        }
        idx--;
    }
    if (acc === undefined) {
        return "OOPS";
    }
    return acc;
};

// Do not edit below this line
module.exports = fibonacci;
