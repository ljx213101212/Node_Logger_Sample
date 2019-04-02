const https = require('https');
const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();


const hostname = '127.0.0.1';
const port = 3000;

app.use(express.json());
require('./api/node_routes')(app, {});
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});