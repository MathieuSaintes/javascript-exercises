const removeFromArray = function(array) {
  const values = Array.prototype.slice.call(arguments, 1);
  return array.filter(element => {
    for (const value of values) {
        if (element === value) return false;
    }
    return true;
  });
};

// Do not edit below this line
module.exports = removeFromArray;