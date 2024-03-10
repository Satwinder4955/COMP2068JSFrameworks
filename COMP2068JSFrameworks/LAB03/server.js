// Import required modules
const http = require('http');
const url = require('url');
const readline = require('readline');

// Create a HTTP server
const server = http.createServer((req, res) => {
  // Parse the URL
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  // If the request is for the root path
  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
      <head><title>Calculator</title></head>
      <body>
        <h1>Calculator</h1>
        <form action="/calculate" method="get">
          <label for="num1">First number:</label>
          <input type="text" name="num1" id="num1" required><br>
          <label for="num2">Second number:</label>
          <input type="text" name="num2" id="num2" required><br>
          <label for="method">Method:</label>
          <select name="method" id="method">
            <option value="add"> + </option>
            <option value="subtract"> - </option>
            <option value="multiply"> * </option>
            <option value="divide">  / </option>
          </select><br>
          <button type="submit">Calculate</button>
        </form>
      </body>
      </html>
    `);
    res.end();
  }

  // If the request is for the calculate path
  else if (pathname === '/calculate') {
    // Extract parameters from query string
    const { method, num1, num2 } = query;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    // Calculate result based on the method
    const operations = [
      { method: 'add', operation: (n1, n2) => n1 + n2 },
      { method: 'subtract', operation: (n1, n2) => n1 - n2 },
      { method: 'multiply', operation: (n1, n2) => n1 * n2 },
      { method: 'divide', operation: (n1, n2) => n2 !== 0 ? n1 / n2 : 'Error: Division by zero' }
    ];
    
    let result = 'Invalid method';
    for (let i = 0; i < operations.length; i++) {
      if (method === operations[i].method) {
        result = operations[i].operation(n1, n2);
        break;
      }
    }

    // Send the result as response
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(`${n1} ${method} ${n2} = ${result}`);
    res.end();
  }

  // If the request is for an unknown path
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
    res.end();
  }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
