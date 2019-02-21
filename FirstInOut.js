var fs = require('fs');

var contents = fs.readFileSync(process.argv[2]);
//var contents2 = contents.toString();
var lines = contents.toString().split('\n').length -1;

console.log(lines);
//console.log(contents2);