const express = require("express")
const app = express()
const port = 3000;

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello, Welcome to my Page")
})
app.listen(port,()=>{
    console.log(`port is running http://localhost:${port}`)
}
)