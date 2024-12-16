const convertToCelsius = function(fhr) {

  let celsius = (fhr - 32) * 5/9;
  
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(cls) {

  let fahrenheit = cls * (9/5) + 32;
  if(fahrenheit < 0) {
    return 0;
  }
    return parseFloat(fahrenheit.toFixed(1));
};

convertToCelsius(73);
convertToFahrenheit(23);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
