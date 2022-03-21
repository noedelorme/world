/**************************************
  MODULE IMPORT
**************************************/
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config.json');


/**************************************
  INITIALISATION
**************************************/
const app = express();
app.use(express.static(path.join(__dirname, '../frontend/build/')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/**************************************
  ROOTER SYSTEM
**************************************/
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '../frontend/build/', 'index.html'));
});

app.listen(config.port, config.adress);