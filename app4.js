const express=require('express')
const parser=require('body-parser');
const app=express();
app.use(parser.urlencoded({extended:false}));
app.use('/addProduct',(req,res,next)=>{
    res.send('<form action="/product" Method="POST"><input type ="text" name="title"><input type ="text" name="size"><button type="submit">Add Product</button></form>')
})
app.use('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

app.use('/',(req,res,next)=>{
    res.send('<h1>Hello from Expresssssssss!</h1>')
  //  console.log("In the middleware")
   // next();
})
app.listen(4000);
