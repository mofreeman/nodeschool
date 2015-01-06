var net = require('net');

function addLeadingZero(value)
{
  if (value < 10)
     return '0' + value;
  else
     return value;
};

var server = net.createServer(function (socket) {
  var date = new Date();

  var year = date.getFullYear();
  var month = addLeadingZero(date.getMonth()+1);
  var day = addLeadingZero(date.getDate());
  var hour = addLeadingZero(date.getHours());
  var minutes = addLeadingZero(date.getMinutes());

  var current =  year + '-' + month + '-' + day + ' ' + hour + ':' + minutes;

  socket.end(current + '\n');
});

server.listen(process.argv[2]);
