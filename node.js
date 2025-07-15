const http = require('http')
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'})
    if(req.url === '/'){
        res.end('welcome to Home of the website')
    }else if(req.url === '/about'){
        res.end('You are in the about page of my fucking web-Site')
    }
})
server.listen(3000,()=>{
    console.log(`server is running on the port http://localhost:3000`)
})