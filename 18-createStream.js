const {createReadStream} = require('fs')

const stream = createReadStream('./content/big-file.txt', {highWaterMark: 50000, encoding:"utf8"})

stream.on('data', (result)=>{
    console.log(result);
})

stream.on("close", ()=>{
    console.log("File closed");
})