const express=require('express');
const router=express.Router();
const parser=require('body-parser')
const path=require('path');
const rootdir=require('../util/path');
router.use(parser.urlencoded({extended:false}));
router.get('/addProduct',(req,res,next)=>{
   res.sendFile(path.join(rootdir,'views','addProduct.html'));
})
router.post('/addProduct',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports=router;