var fs = require('fs');

function callback (err, data) {
  var fileContents = data.toString();
  var lines = fileContents.split('\n').length - 1;
  console.log(lines);
}

buffer = fs.readFile(process.argv[2], callback);
