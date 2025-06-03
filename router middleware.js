// const express = require("express")
// const router = express.Router()

// router.use((req,res,next)=>{
//     console.log("User router middleware")
//     next()
// })

// router.get("/",(req,res)=>{
//     res.send("user profile")
// })

// application.use("/user", router);

console.log('First');

setTimeout(() => {
  console.log('Timeout 0 ms');
}, 0);

process.nextTick(() => {
  console.log('Next Tick');
});

console.log('Last');