const {readFileSync, writeFileSync} = require('fs');

console.log("start");
const str1 = readFileSync('./content/first.txt', 'utf-8');
const str2 = readFileSync('./content/second.txt', 'utf-8');

writeFileSync('./content/read-syc.txt', `${str1} ${str2} \n`,
 {flag:'a'});
console.log("done with this task");
console.log("start new task");
