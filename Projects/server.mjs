import * as http from 'node:http';
import { hostname } from 'node:os';

http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
}).listen((port, hostname) => {
  console.log(`Server running at http://${hostname}:${port}/`);
});