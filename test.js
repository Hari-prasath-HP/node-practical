let express = require("express")
let app = express()
let port = 3000;

app.get('/',(req,res)=>{
    res.send("Welcome to knjithabadham vlogs")
})

app.listen(port,()=>{
    console.log('http://localhost:3000')
})