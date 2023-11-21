const convertToCelsius = function(Tf) {
  return +( (5/9) * (Tf - 32) ).toFixed(1);
};

const convertToFahrenheit = function(Tc) {
  return +(Tc * 9 / 5 + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
