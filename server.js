const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static("express"));

// default URL for the website
app.use('/', (req, res) => {
  res.send(path.join(__dirname+'/express/index.html'));
  //__dirname : will resolve to the project folder
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);

console.debug('Server is listening on port ' + port);