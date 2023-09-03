const express=require('express');
const router=express.Router();
router.get('/',(req,res,next)=>{
    res.send('<h1>Hello from Expresssssssss!</h1>')
  //  console.log("In the middleware")
   // next();
})
module.exports=router;