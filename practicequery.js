const express = require('express')
const app = express()

app.get('/:num2',(req,res)=>{
    const {num1} = req.query
    const {num2} = req.params

    const sum = Number(num1) + Number(num2)
    res.send(`Sum of the numbers = ${sum}`)
    console.log(sum)
})

app.listen(3000,()=>{
    console.log(`serveris running on the http://localhost:3000`)
})