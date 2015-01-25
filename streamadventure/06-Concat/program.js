var concat = require('concat-stream');

process.stdin.pipe(concat(function(text) {
        var result = text.toString().split('').reverse().join('');
        console.log(result);
    }))
