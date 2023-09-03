const express=require('express');
const router=express.Router();
const parser=require('body-parser')

router.use(parser.urlencoded({extended:false}));
router.get('/addProduct',(req,res,next)=>{
    res.send('<form action="/admin/addProduct" Method="POST"><input type ="text" name="title"><input type ="text" name="size"><button type="submit">Add Product</button></form>')
})
router.post('/addProduct',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports=router;