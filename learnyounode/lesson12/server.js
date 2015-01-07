var http = require('http');
var map = require('through2-map')

var server = http.createServer(function (req, rsp) {
  if (req.method != 'POST') return res.end('not a post.');

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(rsp)
});

server.listen(process.argv[2]);
