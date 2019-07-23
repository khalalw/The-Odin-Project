"use strict";
// basic node routing
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var fs = require("fs");
function displayPageContent(fileName, response, statusCode) {
    fs.readFile(fileName, function (err, data) {
        if (err)
            throw err;
        response.writeHead(statusCode, { 'Content-Type': 'text/html' });
        response.write(data);
        response.end();
    });
}
var server = http.createServer(function (req, res) {
    var path = req.url;
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
