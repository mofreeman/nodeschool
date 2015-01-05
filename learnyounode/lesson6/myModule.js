var fs = require('fs');
var p = require('path');


module.exports = function (path, ext, callback) {
  var files = [];

  fs.readdir(path, function(err, list) {

    if (err) return callback(err);

    list.forEach(function(file) {
      if (p.extname(file) === '.' + ext) {
        files[files.length] = file;
      };
    });

    callback(null, files);
  });
};
