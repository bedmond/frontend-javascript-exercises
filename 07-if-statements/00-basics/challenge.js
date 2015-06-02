module.exports.favoriteNumber = function(fav, guess) {
if (fav < guess) {
  return "Too high";
}
else if (fav > guess) {
  return "Too low";
}
else if (fav === guess) {
  return "You got it!";
}
};

module.exports.checkLock = function(first, second, third, fourth) {
if ((first === 3 || first === 5 || first === 7) && second === 2 && (third >= 5 && third <= 100) && (fourth < 9 || fourth > 20)) {
  return "correct";
}
else {
  return "incorrect";
}
};

module.exports.canIGet = function(item, money) {
if (item == 'MacBook Air' && money >= 999) {
  return true;
}
else if (item == 'MacBook Pro' && money >= 1299) {
  return true;
}
else if (item == 'Mac Pro' && money >= 2499) {
  return true;
}
else if (item == 'Apple Sticker' && money >= 1) {
  return true;
}
else {
  return false;
}
};
