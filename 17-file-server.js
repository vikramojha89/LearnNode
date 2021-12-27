const http = require('http')
const {readFileSync } = require('fs')

const server = http.createServer((req, res)=>{
    const text = readFileSync('./content/big-file.txt', 'utf8')
    res.end(text)
})

server.listen(5000, ()=>{
    console.log("Server listening to port 5000...");
})