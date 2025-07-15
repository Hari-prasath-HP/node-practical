const {parentPort} = require('worker_threads')

parentPort.on('message',(msg)=>{
    console.log('Message from main thread',msg)

    let sum = 0
    for(let i=0;i<1e9;i++)sum+=i
    parentPort.postMessage(`finished word,sum = ${sum}`)
    process.exit(0)
})