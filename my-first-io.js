var fs = require("fs");

var buff = fs.readFileSync(process.argv[2],'utf-8').toString() ;
var lines = buff.split('\n')
console.log(lines.length-1) ;


