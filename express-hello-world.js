'use strict';

const express = require('express');
const app = express ();
var port = process.env.PORT
console.log("port",port);
const dateTime = (req,res,next)=>{
  req.dateTimeNow = new Date();
  next();
}
app.get('/',(req,res)=>{
  res.send('Hello World')
})
app.use(dateTime)
app.get('/time',(req,res)=>{
  res.send(`${req.dateTimeNow.toISOString()}`)
})

app.listen(port||8080);
