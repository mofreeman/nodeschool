var concat = require('concat-stream');

process.stdin
    .pipe(concat(function(text) {
        //console.log(text.toString());
        var result = text.toString().split('').reverse().join('');
        console.log(result);
 //       this.queue(result  + '\n');
    }))
//    .pipe(process.stdout);