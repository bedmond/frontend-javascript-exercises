module.exports.getKeys = function(object) {
  var output = [];
  for (var key in object) {
    output.push(key);
  }
  return output;
};

module.exports.getValues = function(object) {
  var output = [];
    for (var val in object) {
      output.unshift(object[val]);
    }
    return output;
  };

module.exports.objectToArray = function(object) {
  var output = [];
  for (var str in object) {
    output.push(str + " is " + object[str]);
  }
  return output;
};