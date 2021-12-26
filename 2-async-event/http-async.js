const http = require('http');

const server = http.createServer((req, res)=>{
if(req.url === '/'){
    res.write('Home Page')
    res.end();
}
else if(req.url === '/about' ){
    res.end('About Page')   
}
else{
res.end("Error")}
})

server.listen(5000, () => {
    console.log("Server Listening to port 5000...")
})