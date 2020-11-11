//const http = require('http');
var express = require("express");
var app = express();
const port = process.env.PORT || 3000
/*
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello Testing from github remote repo</h1>');
});
*/

app.get("/", (req, res) => {
  res.send(["Hello from ilearn-git!"]);
 });
 
app.get("/api", (req, res, next) => {
 res.json(["Lorem","Ipsum","Dolor","Sit","Amet"]);
});

app.get("/random", (req, res, next) => {
 res.json([Math.floor(Math.random() * 90) + 10]);
});

app.listen(port,() => {
  console.log(`Server running at port `+port);
});
