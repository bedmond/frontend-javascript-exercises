module.exports.stream = function(conditionalFn, actionFn) {
  while(conditionalFn()) {
    actionFn();
  }
  };
 

module.exports.sumNumbers = function(numbers) {
  var sum = 0;
  while(numbers.length > 0) {
    sum += numbers.pop();
  }
    return sum;
};
