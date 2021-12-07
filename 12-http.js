const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write("Welcome to our home page")
        res.end()
    }
    else if(req.url === '/about'){
        res.write("Here is our short history")
        res.end()
    }
    {
    res.end(`
    <h1>OOPS!</h1>
    <p>We don't find any resource</p>
    <a href="/">back home</a>
    `)
    }
});

server.listen(5000);