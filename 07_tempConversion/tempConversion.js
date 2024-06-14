function roundTo1Decimal(float) {
  return +float.toFixed(1);
}

const convertToCelsius = function(Tf) {
  const Tc = (Tf-32)*(5/9);
  return roundTo1Decimal(Tc);
};

const convertToFahrenheit = function(Tc) {
  const Tf = (9/5)*Tc+32;
  return roundTo1Decimal(Tf);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
