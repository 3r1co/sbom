// index.js
const express = require('express');
const _ = require('lodash');

const app = express();
const port = 3000;

// A simple route that responds with "Hello, World!"
app.get('/', (req, res) => {
  const userInput = req.url.substring(1); 
  // BAD PRACTICE: Passing unsanitized input to exec()
  exec(`ls ${userInput}`, (error, stdout, stderr) => {
    if (error) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(`Error: ${error.message}`);
      return;
    }
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(stdout);
  });
  res.send('Hello, World 2025!');
});

// Example of using lodash (an outdated dependency)
app.get('/lodash-example', (req, res) => {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = _.map(numbers, num => num * 2);
  res.send(`Doubled Numbers: ${doubled}`);
});

// Start the web server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});