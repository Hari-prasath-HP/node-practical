const express = require("express")
const app = express()
const port = 3000;

app.use(express.json())

const logger = (req,res,next)=>{
    console.log(`${req.method} ${req.url}`)
    next();
}

app.use(logger)
app.get('/',(req,res)=>{
    res.send("Hello, Welcome to my Page")
})
app.listen(port,()=>{
    console.log(`port is running http://localhost:${port}`)
}
)