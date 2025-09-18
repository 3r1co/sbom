// index.js
const express = require('express');
const _ = require('lodash');

const app = express();
const port = 3000;

// A simple route that responds with "Hello, World!"
app.get('/', (req, res) => {
  res.send('Hello, World 2025!');
});

// Example of using lodash (an outdated dependency)
app.get('/lodash-example', (req, res) => {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = _.map(numbers, num => num * 2);
  res.send(`Doubled Numbers: ${doubled}`);
});

function greet(name) {
  const unused = 42;  // 🚨 SonarQube Warning: "Remove this unused variable."
  return "Hello " + name;
}

console.log(greet("Eric"));

// Start the web server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});