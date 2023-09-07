const express=require('express');
const router=express.Router();
const path=require('path');
const rootdir=require('../util/path');
const productcontroller=require('../controllers/product');
router.get('/contactus',productcontroller.contact);
router.post('/success',productcontroller.success)

module.exports=router;