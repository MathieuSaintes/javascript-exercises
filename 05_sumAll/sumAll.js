const sumAll = function(a,b) {
  if (
    a < 0 ||
    b < 0 ||
    typeof a !== 'number' ||
    typeof b !== 'number'
    ) return 'ERROR';
  if (a > b) return sumAll(b,a);  
  let total = 0;
  for (let i = a; i <= b; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
