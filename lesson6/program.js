var mymodule = require('./myModule.js')

var path = process.argv[2];
var ext = process.argv[3];

mymodule(path, ext, function(err, list) {

  if (err) return console.log(err);

  list.forEach(function(file) {
    console.log(file);
  });
});
