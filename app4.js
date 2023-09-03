const express=require('express')
const parser=require('body-parser');
const app=express();
const adminrouter=require('./routes/admin');//while importing order doesn't matter
const shoprouter=require('./routes/shop')
app.use('/admin',adminrouter);//order matters Here
app.use(shoprouter);
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
})


app.listen(4000);
