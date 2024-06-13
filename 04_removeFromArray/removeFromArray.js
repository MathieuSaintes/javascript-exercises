const removeFromArray = function(array, ...valuesToBeRemoved) {
    return array.filter(value => !valuesToBeRemoved.includes(value));
}

/* const removeFromArray = function(array, ...values) {
    for (let i = 0; i < array.length;) {
        if (values.includes(array[i])) {
            array.splice(i, 1);
        } else {
            i++;
        }
    }
    return array;
}; */

// Do not edit below this line
module.exports = removeFromArray;
