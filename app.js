const express = require('express');
const path = require('path');

const app = express();
const http = require('http').Server(app);


app.use(express.static(path.join(__dirname, 'public')));

http.listen(3400 , () => {
  console.log('Server connected at port 3400');
});