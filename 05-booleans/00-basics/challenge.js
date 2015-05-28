module.exports.equalStrings = function(stringOne, stringTwo) {
return stringOne == stringTwo;
};

module.exports.notEqual = function(one, two) {
return one !== two;
};

module.exports.inBetween = function(lower, middle, upper) {
return lower < middle && middle < upper;
};

module.exports.outsideRanges = function(number) {
  var notBetween10and20 = (number < 10) || (20 < number);
  var notBetween42and75 = (number <= 42) || (75 < number);
  var notBetween1and6 = (number <= 1) || (6 <= number);
  return (notBetween10and20 && notBetween42and75 && notBetween1and6);
};

module.exports.nameAndPrice = function(name, price) {
  return (name === "NYTimes" || name === "LATimes") && (price >= 1);
};