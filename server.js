const express = require('express');
const path = require('path');

const app = express();

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static(__dirname + '/dist/ego-challege'));

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname+'/dist/ego-challege/index.html'));
});

app.listen( process.env.PORT || 8080);
