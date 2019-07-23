const http = require("http");
const fs = require("fs");

function displayPageContent(fileName, response, statusCode) {
    fs.readFile(fileName, (err, data) => {
        if (err) throw err;
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    });
}


http
  .createServer((req, res) => {
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
  })
  .listen(4000);
