"use strict";
// express routing
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var fs = require("fs");
var app = express();
function displayPageContent(filePath, res, statusCode) {
    fs.readFile(filePath, function (err, data) {
        res
            .header('Content-Type', 'text/html')
            .status(statusCode)
            .send("" + data)
            .end();
    });
}
// set up routes
app.get('/', function (req, res) {
    displayPageContent('index.html', res, 200);
});
app.get('/contact-me', function (req, res) {
    displayPageContent('contact-me.html', res, 200);
});
app.get('/about', function (req, res) {
    displayPageContent('about.html', res, 200);
});
app.get('/*', function (req, res) {
    displayPageContent('404.html', res, 400);
});
var port = 4000;
app.listen(port, function () {
    console.log("Server is listening on http://localhost:" + port);
});
