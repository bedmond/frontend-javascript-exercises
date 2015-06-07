module.exports.copy = function(object) {
  var output = {};
  for (var obj in object) {
    output[obj] = object[obj];
  }
  return output;
};

module.exports.extend = function(dest, src) {
  for (var obj in src) {
    dest[obj] = src[obj];
  }
  return dest;
};

module.exports.hasElems = function(object, elem) {
  for (var i = 0; i < elem.length; i++) {
    if (object[elem[i]] === undefined) {
      return false;
    }
  }
  return true;
};