const http=require('http');
const server=http.createServer((req,res)=>{
 const url=req.url;
 if(url=='/home'){
  res.write('Welcome home')
 }
 else if (url === '/about') {
  res.write('Welcome to About Us page');
} else if (url === '/node') {
  res.write('Welcome to my Node.js project');
} 
res.end();
})
server.listen(4000);