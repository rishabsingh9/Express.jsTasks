const http = require('http');
const routes=require('./routes');
console.log('ok');

const server = http.createServer(routes.handler);

server.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
