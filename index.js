const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/api/info') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'ok',
      app: 'counseling-sample',
      pid: process.pid,
      time: new Date().toISOString()
    }));
    return;
  }

  if (req.method === 'GET' && req.url === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ healthy: true }));
    return;
  }

  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('Hello from Counseling Sample\\n');
});

server.listen(port, () => console.log('listening on', port));
