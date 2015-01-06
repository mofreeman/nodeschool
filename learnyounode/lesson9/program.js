var http = require('http');
var bl = require('bl');

var responses = [];
var count = 0;
var total = process.argv.length - 2;

function getResponse(url, order, callback)
{
  http.get(url, function(response) {
    response.pipe(bl(function (err, data) {
      if (err) return console.error(err);
      responses[order] = data.toString();
      callback();
    }));
  });
};

function printResponses() {
  count++;
  if (count == total) {
    responses.forEach(function(response) {
      console.log(response);
    });
  };
};

for (var i = 0; i < total; i++)
{
  getResponse(process.argv[i+2], i, printResponses);
};
