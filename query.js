const express = require("express")
const app = express()

app.get('/',(req,res)=>{
    const {name,age} = req.query;
    const {num1,num2} = req.query;
    let sum = Number(num1)+Number(num2)
    res.send(`Name: ${name}, Age: ${age} <br> sum of both number is : ${sum}`)
})

app.listen(3000,()=>{
    console.log(`server is running htto://localhost:3000`)
})