module.exports.reversePlusOne = function(a) {
  var array = a;
  array.reverse();
  array.unshift(1);
  return array;
};

module.exports.plusesEverywhere = function(a) {
  var array = a;
  return array.join('+');
};

module.exports.arrayQuantityPlusOne = function(a) {
  var array = a;
  return array.length + 1;
};