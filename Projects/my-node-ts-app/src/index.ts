import * as http from 'node:http';

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  console.log("Request Body : ", req);
  res.end('Hello World');
  // process.exit(); /// To exit the process
});

server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});