const reverseString = function(string){
    const array = string.split('');
    array.reverse();
    const reversedString = array.join('');
    return reversedString;
}

/* const reverseString = function(string) {
    const l = string.length;
    let output = '';
    for (i = 1; i <= l; i++) {
        output += string[l-i];
    }
    return output;
}; */

// Do not edit below this line
module.exports = reverseString;
