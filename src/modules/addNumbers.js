let add = require("./add");

function a(num) {
  return add(num,10);
}

function b(num) {
  return add(num, 5);
}

module.exports.addTen = a;
module.exports.addFive = b;