var randomWords = require('random-words');
var rando= randomWords(100);
console.log(rando);
var fs = require('fs');
var wstream = fs.createWriteStream('myOutput.txt');
for (i = 0; i < rando.length; i++) { 


wstream.write(rando[i]+"\r\n");

}
wstream.end();