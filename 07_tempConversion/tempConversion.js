const ftoc = function(tempFahrenheit) {
  return Math.round((tempFahrenheit-32)*5/9*10)/10;
};

const ctof = function(tempCelcius) {
  return Math.round((tempCelcius*9/5+32)*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
