const express=require('express')
const router=express()

const path=require('path')
const rootdir=require('../util/path');
const Product=require('../models/product')
const parser=require('body-parser')
const fs=require('fs')
//router.use(parser.urlencoded({extended:false}));
exports.getAddProducts=(req,res,next)=>{

    res.sendFile(path.join(rootdir,'views','addProduct.html'));
}
exports.postAddProduct=(req,res,next)=>{
    console.log(req.body.title)
    const product=new Product(req.body.title);
    product.save();
    res.redirect('/')
}
exports.contact=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','contact.html'))
}
exports.success=(req,res,next)=>{
    res.send('<h1>Form Submitted Successfully</h1>')
}
exports.getProducts=(req,res,next)=>{
    const products=Product.fetchAll();
    res.sendFile(path.join(rootdir,'views','shop.html'));
 }