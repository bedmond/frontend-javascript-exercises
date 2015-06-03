module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
  var course = {
    title: courseTitle,
    duration: courseDuration,
    students: courseStudents
  }
  return course;
};


module.exports.addProperty = function(object, newProp, newValue) {
  if (object[newProp] === undefined) {
    object[newProp] = newValue;
  }
  return object;
};

module.exports.formLetter = function(b) {
  return "Hello " + b.recipient + ",\n\n" + b.msg + "\n\nSincerely,\n" + b.sender;
};

module.exports.canIGet = function(item, money) {
  var merch = {
    'MacBook Air': 999,
    'MacBook Pro': 1299,
    'Mac Pro': 2499,
    'Apple Sticker': 1
};

price = merch[item]
return (price !== undefined && money >= price);
};