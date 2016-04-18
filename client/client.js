var app = angular.module('ticketApp', []);

app.controller('TicketController', ['$scope', '$http', function($scope, $http){
  ///////Sets the input field values
  // var ticket = this;
  $scope.ticket = {};
  $scope.tickets =[];

  $scope.ticket.name = '';
  $scope.ticket.type = '';
  $scope.ticket.priority = '';
  $scope.ticket.description = '';
  $scope.ticket.assignee = '';
  $scope.ticket.reporter = '';
  $scope.dateCreated = new Date;
  $scope.dateUpdated = new Date;



  var fetchTickets = function(){
    return $http.get('/tickets').then(function(response){
      if(response.status !== 200){
        throw new Error('Failed to get tickets from API');
      }
      $scope.ticket = {};
      $scope.tickets = response.data;
      // console.log(response.data);
      return response.data;
    })
  };

  $scope.createNewTicket = function(ticket){
    console.log(ticket);
    console.log('You made a ticket!');
    return $http.post('/ticket', ticket).then(fetchTickets());
  };
  fetchTickets();
}]);
