const express=require('express');
const router=express.Router();
const fs=require('fs');
const parser=require('body-parser');
router.use(parser.urlencoded({extended:false}));

router.get('/',(req,res,next)=>{
     fs.readFile('GroupChat/message.txt', (err,data)=>{
        if(err){
            console.log(err);
            data='No Chat Exits'
        }
        res.send(`${data}<form action="/messa" Method="POST"><input type="text" name ="message"><button>Send</button></form>`);
     });
})
router.post('/messa',(req,res,next)=>{
    let messages = fs.readFileSync('GroupChat/message.txt', 'utf-8');
    messages = messages +":"+req.body.message;
    fs.writeFileSync("GroupChat/message.txt",messages);
    res.redirect('/');
})
module.exports=router;