const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((request, response) => {
  const params = url.parse(request.url, true).query;
  const word = params.word;
  const definition = getDefinition(word);
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(`
    <!DOCTYPE html>
    <html>
      <head></head>
      <body>
        <h1>${definition}</h1>
      </body>
    </html>
  `);
  response.end();
});

function getDefinition(word) {
  let result = '';
  if (word !== '') {
    const dicObj = convertTXT();
    result = dicObj[word];
    if (!result) {
      result = 'Sorry your word was not found'
    }
  } else {
    result = 'Sorry your word was not found'
  }
  return result;
}

function convertTXT() {
  const dictionary = fs.readFileSync("./dictionary.txt", "utf-8").split('\n');
  const dicObj = {};
  dictionary.forEach(element => {
    const arr = element.split(' ');
    dicObj[arr[0]] = element;
  })
  return dicObj;
}

server.listen(5500);
console.log('Server listening on port 5500');