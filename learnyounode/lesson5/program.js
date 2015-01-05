var fs = require('fs');
var p = require('path');

var path = process.argv[2];
var ext = process.argv[3];

fs.readdir(path, function (err, list) {
  list.forEach(function(file, index, array) {
    if (p.extname(file) === '.' + ext) {
      console.log(file);
    }
  });
});
