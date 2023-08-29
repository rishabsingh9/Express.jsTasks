const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body>');

    // Display the latest submitted message
    if (latestMessage) {
      res.write('<h2>Latest Submitted Message:</h2>');
      res.write(`<p>${latestMessage}</p>`);
    }

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
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];

      // Store the latest submitted message
      latestMessage = message;

      // Redirect to the home page
      res.writeHead(302, { 'Location': '/' });
      return res.end();
    });
  }
});

let latestMessage = ''; // Store the latest submitted message

server.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
