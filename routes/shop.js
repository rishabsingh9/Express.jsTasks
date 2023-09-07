const express=require('express');
const path=require('path');
const router=express.Router();
const rootdir=require('../util/path');
const productcontroller=require('../controllers/product');
router.get('/',productcontroller.getProducts)
module.exports=router;