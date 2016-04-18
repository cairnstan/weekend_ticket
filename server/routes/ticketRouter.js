var express = require('express');
var mongoose = require('mongoose');
var Ticket = require('../../models/ticketModel');


var router = express.Router();

router.post('/ticket', function(request, response, next){
  console.log(request.body);
  var tick = new Ticket ({
    name: request.body.name,
    type: request.body.type,
    priority: request.body.priority,
    description: request.body.description,
    assignee: request.body.assignee,
    reporter: request.body.reporter,
    created: new Date(),
    updated: new Date()
  })
  tick.save(function(err){
    if(err) console.log('tickets ', err);
    response.send(tick.toJSON);
  });
});

router.get('/tickets', function(request, response, next){
  Ticket.find({}).exec(function(err, tickets){
    if(err){
      throw new Error (err);
      }
    response.send(JSON.stringify(tickets));
    next();
  });
  // response.send('GET YOUR TICKETS HERE');
});

module.exports = router;
