const sumAll = function(...pair) {

    for (const item of pair) {
        if (typeof item != 'number' || item < 0) return 'ERROR';
    }

    const [smallest, largest] = pair.sort();

    let sum = 0;
    for (let i = smallest; i <= largest; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
