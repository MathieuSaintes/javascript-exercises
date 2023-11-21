const removeFromArray = function(array) {
  const values = Array.prototype.slice.call(arguments, 1);
  return array.filter(element => !values.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;