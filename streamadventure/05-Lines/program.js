var through = require('through');
var split = require('split');
var tr = through(write);
var odd = true;

function write (line)
{
    var result = line.toString();
    
    if (odd) {
        result = result.toLowerCase();
    } else {
        result = result.toUpperCase();
    }
    
    this.queue(result  + '\n');
    
    odd = !odd;
};

process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout);