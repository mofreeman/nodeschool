var fs = require('fs');

buffer = fs.readFileSync(process.argv[2]);
var fileContents = buffer.toString();
var lines = fileContents.split('\n').length - 1;
console.log(lines);
