const http = require('http');
const htmlHandler = require('./htmlResponse');
const textHandler = require('./textResponse');
const jsonHandler = require('./jsonResponse');
const imageHandler = require('./imageRespone');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  switch (request.url) {
    case '/':
      console.log(request.url);
      htmlHandler.getIndex(request, response);
      break;
    case '/page2':
      console.log(request.url);
      htmlHandler.getPage2(request, response);
      break;
    case '/hello':
      console.log(request.url);
      textHandler.getHello(request, response);
      break;
    case '/time':
      console.log(request.url);
      textHandler.getTime(request, response);
      break;
    case '/helloJSON':
      console.log(request.url);
      jsonHandler.getHelloJSON(request, response);
      break;
    case '/timeJSON':
      console.log(request.url);
      jsonHandler.getTimeJSON(request, response);
      break;
    case '/image':
      console.log(request.url);
      imageHandler.getImage(request, response);
      break;
    default:
      console.log(request.url);
      htmlHandler.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port);

console.log(`listening on 127.0.0.1: ${port}`);
