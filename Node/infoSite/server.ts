// basic node routing

import http = require('http');
import fs = require('fs');

function displayPageContent(fileName: string, response: http.ServerResponse, statusCode: number) {
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    response.writeHead(statusCode, { 'Content-Type': 'text/html' });
    response.write(data);
    response.end();
  });
}

const server = http.createServer((req, res) => {
  const path = req.url;

  switch (path) {
    case '/':
      displayPageContent('index.html', res, 200);
      break;
    case '/contact-me':
      displayPageContent('contact-me.html', res, 200);
      break;
    case '/about':
      displayPageContent('about.html', res, 200);
      break;
    default:
      displayPageContent('404.html', res, 404);
  }
});

server.listen(4000);
