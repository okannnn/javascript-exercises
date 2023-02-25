const convertToCelsius = function(val) {
    cel = (val - 32) * 5/9
    
    
    return +(Math.round(cel + "e+" + 1)  + "e-" + 1);
};

const convertToFahrenheit = function(val) {
    fah = (val *9/5) + 32
    
    
    return +(Math.round(fah + "e+" + 1)  + "e-" + 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
