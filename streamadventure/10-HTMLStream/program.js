var trumpet = require('trumpet');
var through = require('through');

var tr = trumpet();

var loud = tr.select('.loud').createStream();

process.stdin.pipe(tr).pipe(process.stdout);

loud.pipe(through(function (buf) {
    this.queue(buf.toString().toUpperCase());
})).pipe(loud);