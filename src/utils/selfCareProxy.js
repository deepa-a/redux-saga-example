const http = require('http');
const httpProxy = require('http-proxy');
// Reverse proxy for the surrogate server to consume
const reverseProxy = httpProxy.createProxyServer();
// Actual URL of the selfcare server
const targetUrl = 'http://10.50.30.121:8200/';
// Surrogate server local listening port
const port = '5050';

const fs = require('fs');
const path = require('path');

// Must set CORS headers to avoid CORB in Chrome (doesn't work in Firefox)
reverseProxy.on('proxyRes', (proxyRes, req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'application/json');
});

// Surrogate server for local dev to access
const surrogate = http.createServer((req, res) => {
  console.log();
  console.log(`-- Request received: ${new Date()}`);
  console.log(req.url);

  /**
   * Must set method to what you need here. Since this proxy
   * relays requests from the browser, the incoming method is
   * still OPTIONS which will in turn be sent to the proxy
   * and causing 500 errors.
   */
  req.method = 'GET';
  // Headers are not send through, so they must be set
  req.headers = {
    'ocs-client-id': 'mocca',
    'ocs-user-id': 'mocca_admin',
  };

  // Using 'web' mode to relay the requests
  reverseProxy.web(req, res, { target: targetUrl });
});

surrogate.listen(port);

console.log(`-- Listening on port ${port}`);
console.log();

const authJson = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'roles.json');

  // Read the authorisations from a JSON file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end(`Error getting the file: ${err}.`);
    } else {
      res.setHeader('Content-type', 'application/json' || 'text/plain');
      res.setHeader('Access-Control-Allow-Credentials', true);
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
      res.setHeader('Access-Control-Allow-Headers', 'application/json');
      
      res.end(data);
    }
  });
});

authJson.listen(5060);
