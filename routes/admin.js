const express=require('express');
const router=express.Router();
const parser=require('body-parser')
const path=require('path');
const productcontroller=require('../controllers/product');
router.use(parser.urlencoded({extended:false}));
router.get('/addProduct',productcontroller.getAddProducts)
router.post('/addProduct',productcontroller.postAddProduct);

module.exports=router;