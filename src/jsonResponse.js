const textHandler = require('./textResponse');

const getHelloJSON = (req, res) => {
  const helloJSON = {
    message: textHandler.hello,
  };
  const stringMessage = JSON.stringify(helloJSON);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(stringMessage);
  res.end();
};
const getTimeJSON = (req, res) => {
  const timeJSON = {
    time: textHandler.getTimeString(),
  };
  const stringMessage = JSON.stringify(timeJSON);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(stringMessage);
  res.end();
};
module.exports = {
  getHelloJSON,
  getTimeJSON,
};
