
const fs=require('fs');
const requestHandler=(req,res)=>{
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body>');
    
        // Display the latest submitted message
    
        res.write('<h1>Enter a Message</h1>');
        // Display the form
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" name="message">');
        res.write('<button type="submit">Send</button>');
        res.write('</form>');
    
        res.write('</body>');
        res.write('</html>');
        return res.end();
      }
    
      if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
          body.push(chunk);
        });
       return req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split('=')[1];
            fs.writeFileSync("message.txt",message);
    
          res.writeHead(302, { 'Location': '/' });
          return res.end();
        });
      }
}
//module.exports=requestHandler;
// module.exports={
//     handler:requestHandler,
//     someText:"Hello"
// }
module.exports.handler=requestHandler;
module.exports.someText="hello";