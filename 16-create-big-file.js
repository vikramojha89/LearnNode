const {openSync, closeSync, appendFileSync}  = require('fs');

let fd= openSync('./content/big-file.txt', 'a')
for(i=0;i<10000; i++){
    appendFileSync(fd, "hello World\n", "utf-8")
}
closeSync(fd)