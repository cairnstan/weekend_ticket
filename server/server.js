var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var ticketRouter = require('./routes/ticketRouter');

/////////MONGO/////////////////
var mongoURI = "mongodb://localhost/ticket";
var MongoDB = mongoose.connect(mongoURI).connection;
////////DATABASE HAS BEEN TESTED AND WE ARE GETTING OPEN RESPONSE///////////
MongoDB.on('error', function(err){
  console.log('MongoDB connection error: ', err);
})
MongoDB.once('open', function(){
  console.log('MongoDB connection open.');
})

/////////////GLOBAL//////////////////
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('server/public'));
//pulls in index.js router
app.use('/', index);
//pulls in ticketRouter.js router
app.use('/', ticketRouter);

///////SERVER HAS BEEN TESTED AND IS WORKING/////////
var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port: ', port);
})
