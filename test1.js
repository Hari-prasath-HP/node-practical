const fs = require('fs')

fs.writeFile('sample1.txt','This is Hari writing the file',(err)=>{
    console.log('file written successfully')
})
fs.readFile('sample1.txt','utf-8',(err,data)=>{
    console.log(data)
})
fs.appendFile('sample1.txt','\n this is the added line',(err)=>{
    console.log('file appended')
})
fs.unlink('sample1.txt',)