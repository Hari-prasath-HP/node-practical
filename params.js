const express = require('express')
const app = express()

app.get('/:num1/:num2',(req,res)=>{
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)
    const sum = num1 + num2
    res.send(`Sum of ${num1} & ${num2} is : ${sum}`)
})

app.listen(3000,()=>{
    console.log(`server is running on the port http://localhost:3000`)
})