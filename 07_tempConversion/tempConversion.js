const convertToCelsius = function(input) {
  // let celsius = (input - 32) * (5 / 9);
  // return Number.isInteger(celsius) ? Number(celsius) : Number(celsius.toFixed(1));

  return Math.round((input - 32) * ( 5 / 9) * 10) / 10;

};

const convertToFahrenheit = function(input) {
  // let fahrenheit = (input * (9 / 5)) + 32;
  // return Number.isInteger(fahrenheit) ? Number(fahrenheit) : Number(fahrenheit.toFixed(1));

  return Math.round(((input * 9) / 5 + 32) * 10) / 10;
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
