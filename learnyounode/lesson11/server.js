var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, rsp) {
  var file = fs.createReadStream(process.argv[3]);
  file.pipe(rsp);
});

server.listen(process.argv[2]);
