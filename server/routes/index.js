///////////////this file connects html page/////////////////
var express = require('express');
var path = require('path');
var ticketRouter = require('./ticketRouter');

var router = express.Router();

///////////HTML PAGE IS LOADING//////////////////
router.get('/', function(request, response){
  // response.send('HELLO FROM SERVER');
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
})


module.exports = router;
