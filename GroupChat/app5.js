const express=require('express')
const parser=require('body-parser');
const app=express();
const fs=require('fs');
const loginpage=require('./login');
const message=require('./message');
app.use(loginpage);
app.use(message);
app.listen(4000);