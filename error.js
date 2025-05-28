const express = require("express")
const app = express()

app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.get("/error",(req,res,next)=>{
    const error = new Error('Something went wrong')
    error.status = 500;
    next(error)
})

app.use((err,req,res,next)=>{
    res.status(err.status || 500).json({
        success:false,
        message:err.message || 'internal server error'
    })
})

app.listen(3000,()=>{
    console.log(`Server is running on the port http://localhost:3000`)
})