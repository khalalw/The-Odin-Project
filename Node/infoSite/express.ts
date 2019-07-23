// express routing

import express = require('express');
import fs = require('fs');

const app = express();

function displayPageContent(filePath: string, res: express.Response, statusCode: number) {
  fs.readFile(filePath, (err, data) => {
    res
      .header('Content-Type', 'text/html')
      .status(statusCode)
      .send(`${data}`)
      .end();
  });
}
// set up routes
app.get('/', (req, res) => {
  displayPageContent('index.html', res, 200);
});

app.get('/contact-me', (req, res) => {
  displayPageContent('contact-me.html', res, 200);
});

app.get('/about', (req, res) => {
  displayPageContent('about.html', res, 200);
});

app.get('/*', (req, res) => {
  displayPageContent('404.html', res, 400);
});

const port: number = 4000;
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
