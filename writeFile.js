const fs = require("fs");

exports.writeFile = function(array) {
  Array.prototype.forEach.call(array, function (elem, ind, arr) {
    fs.appendFile("names.txt", `${array[ind]}\n`);
  });

}
