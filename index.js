const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'hai zopday8 !\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
// e2e auto-push test marker — 2026-05-20T17:11:30Z
// e2e retry — 17:14:41Z
