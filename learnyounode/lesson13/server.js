var http = require('http');
var url = require('url');

var server = http.createServer(function (req, rsp) {
  var parsedURL = url.parse(req.url, true);
  var time = new Date(parsedURL.query.iso);

  switch(parsedURL.pathname) {
    case '/api/parsetime':
        rsp.writeHead(200, { 'Content-Type': 'application/json' })
        rsp.end(JSON.stringify({"hour" : time.getHours(), "minute" : time.getMinutes(), "second" : time.getSeconds() }));
        break;
    case '/api/unixtime':
        rsp.writeHead(200, { 'Content-Type': 'application/json' })
        rsp.end(JSON.stringify({"unixtime" : time.getTime() }));
        break;
    default:
        rsp.writeHead(404);
        rsp.end('invalid url');
  }
});

server.listen(process.argv[2]);
