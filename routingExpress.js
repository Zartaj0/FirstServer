const express = require('express');
const fs = require('fs');
var app = express();

app.get('/contact',function (req,res) {
  //fs.createReadStream(__dirname + '/contact.html').pipe(res)
  res.sendFile(__dirname + '/contact.html')
})
app.get('/home',function (req,res) {
  //fs.createReadStream(__dirname + '/contact.html').pipe(res)
  res.sendFile(__dirname + '/index.html')
})

app.get('/profile/:id' ,function (req,res) {
  res.send('We will now provide the details of id: '+ req.params.id )
});

app.listen(3000);
