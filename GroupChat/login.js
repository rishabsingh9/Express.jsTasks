const express=require('express');
const router=express.Router();
const fs=require('fs');
const parser=require('body-parser');
router.use(parser.urlencoded({extended:false}));
router.get('/login',(req,res,next)=>{
    res.send(`<form onsubmit= "localStorage.setItem('username', document.getElementById('username').value)" action="/user" Method="POST"><input type="text" id="username" name="usernames" placeholder="username">
    <button type="submit">Login</button></form>`);

})
router.post('/user',(req,res,next)=>{
    console.log(req.body);
    let data=fs.readFileSync("GroupChat/message.txt",'utf-8')
    data=data+":"+req.body.usernames;
    fs.writeFileSync("GroupChat/message.txt",data);
    res.redirect('/');
})
module.exports=router;