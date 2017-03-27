'use strict';

require('dotenv').config();
const express = require('express');
const app = express ();
const port = process.env.PORT || 8080;
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

app.listen(port,()=>{
  console.log(`server listening to ${port}`)
});
