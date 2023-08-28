const http=require('http');
const server=http.createServer((req,res)=>{
  res.end('Rishabh');
})
server.on('error', error => {
    console.error('Server error:', error.message);
  });
server.listen(4000);