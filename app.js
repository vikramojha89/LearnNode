const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
    const fileSystem = fs.createReadStream('./content/big-file.txt', "utf8")
    fileSystem.on('open', ()=>{
        fileSystem.pipe(res)
    })
    fileSystem.on('error', (err)=>{
        res.end(err);
    })
})

server.listen(5000, ()=>{
    console.log("Server listening to port 5000...");
})