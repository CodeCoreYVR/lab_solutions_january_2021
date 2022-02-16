const http = require('http');
const url = require("url")

const server = http.createServer((request, response) => {
    const params = url.parse(request.url, true).query;

    response.writeHead(200, { 'Content-Type': 'text/html' });
    if (params.name) {
        response.write(renderPages("Hello " + params.name));
    } else {
        response.write(renderPages("Welcome to my application"));
    }
    response.end();
});

function renderPages(content) {
    return `
    <!DOCTYPE html>
    <html>
      <head></head>
      <body>
        <h1>${content}</h1>
      </body>
    </html>
  `
}

server.listen(8080);
console.log('Server listening on port 8080');
