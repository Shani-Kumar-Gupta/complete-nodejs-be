import * as http from 'node:http';

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  console.log("Request Body : ", req);
  // res.end('Hello World');
  // process.exit(); /// To exit the process
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
    <head><title>My Web</title></head>
    <body>Hello From <b>Nodejs</b> Server</body>
    </html>
    `);
  res.end();
});

server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});