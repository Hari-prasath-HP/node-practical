const http = require("http")

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'})
    res.end("Hello World")
})

const port =3000
server.listen(port,()=>{
    console.log(`server running on the host http://localhost:${port}`)
})