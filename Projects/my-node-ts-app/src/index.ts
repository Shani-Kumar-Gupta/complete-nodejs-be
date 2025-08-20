import * as http from 'node:http';
import * as fs from 'node:fs';

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    // res.end('Hello World');
    // process.exit(); /// To exit the process
    // Routing and Redirecting Requests
    const url = req.url;
    const method = req.method;
    if (url === '/') {
      res.write(`
      <html>
      <head><title>Message</title></head>
      <body>
        <form action="/message" method="POST">
          <input type="text" name="message" placeholder="Enter Message">
          <button type="submit">Send</button>
        </form>
      </body>
      </html>
    `);
      return res.end();
    } else if (url === '/message' && method === 'POST') {
      fs.writeFileSync('message.txt', 'HEY DUMMY DATA!');
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.write(`
        <html>
        <head><title>My Web</title></head>
        <body>Hello From <b>Nodejs</b> Server</body>
        </html>
    `);
      res.end();
    }
  }
);

server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});
