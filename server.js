var express = require("express");
var app = express();
var messages = [
    {  text: 'some text', owner: 'Tim'  },
    {  text: 'other text', owner: 'Han'  }];

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/messages', (req, res) => {
  //res.send('hello');
  res.json(messages); // response
});

app.listen(1234);
