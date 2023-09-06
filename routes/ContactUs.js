const express=require('express');
const router=express.Router();
const path=require('path');
const rootdir=require('../util/path');
router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','contact.html'))
})
router.post('/success',(req,res,next)=>{
    res.send('<h1>Form Submitted Successfully</h1>')
})

module.exports=router;