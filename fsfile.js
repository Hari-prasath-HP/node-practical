const { log } = require('console');
const fs = require('fs');
const path = require('path');

// File path
const filePath = path.join(__dirname, 'sample.txt');
fs.writeFile(filePath,'Content of the writfile is nothing',(err)=>{
    console.log("Write file is done")
})
fs.readFile(filePath,'utf8',(err,data)=>{
    console.log(data)
})
fs.appendFile(filePath,'This file is appended',(err)=>{
    console.log('file appended')
})