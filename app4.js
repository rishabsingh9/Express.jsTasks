const express=require('express')
const parser=require('body-parser');
const app=express();
const path=require('path')
const adminrouter=require('./routes/admin');//while importing order doesn't matter
const shoprouter=require('./routes/shop')
const contact=require('./routes/ContactUs.js')
const errorcontroller=require('./controllers/error');
app.use(express.static(path.join(__dirname,'public')))
app.use(adminrouter);//order matters Here
app.use(shoprouter);
app.use(contact)
app.use(errorcontroller.get404);


app.listen(4000);
