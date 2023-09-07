const path=require('path')
const rootdir=require('../util/path');
exports.getAddProducts=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','addProduct.html'));
}
exports.postAddProduct=(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
}
exports.contact=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','contact.html'))
}
exports.success=(req,res,next)=>{
    res.send('<h1>Form Submitted Successfully</h1>')
}
exports.getProducts=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','shop.html'));
 }