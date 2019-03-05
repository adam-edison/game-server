const express = require('express');

const local_port = 3000;
const exposed_port = 8080;

var app = express();


app.get('/', (request, response) => {
  response.send("Hello world!");
});

app.listen(local_port, () => {
  console.log(`Application is accessible via http://localhost:${exposed_port}/`);
});