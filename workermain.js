const {Worker} = require('worker_threads')
const worker = new Worker('./worker.js')

worker.on('message',(msg)=>{
    console.log('message from worker',msg)
})
worker.on('error',(err)=>{
    console.log('Worker error',err)
})
worker.on('exit',(code)=>{
    console.log(`worker stopped with the ${code}`)
})
worker.postMessage('Hello worker')