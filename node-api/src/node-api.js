var express = require('express');
var ip = require('ip');

var app = express();

app.get('/node-api/user', function (req, res) {
  res.send('Hey NODEJS single user!');
});

app.get('/node-api/users', function (req, res) {
  res.send('Hey NODEJS multiple users!');
});

app.listen(3000, function () {
  console.log('\r\n * Node.js API listening on ' + ip.address() + ':3000! * \r\n');
});