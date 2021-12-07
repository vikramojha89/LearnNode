const path = require('path');

console.log(path.sep);

const absolute = path.join('content', 'subfolder', 'test.txt');

console.log(absolute);

const relative = path.relative(__dirname, absolute);

console.log(path.resolve(relative));