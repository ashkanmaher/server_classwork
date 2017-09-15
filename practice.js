var http = require('http');

var port1 = 7000;
var port2 = 7500;

function handleRequestGood(request, response) {
  setTimeout(function() {
    response.end('You are a God');
  }, 1000);
}
  var goodServer = http.createServer(handleRequestGood);
  goodServer.listen(port1, function() {
    console.log('Good server is now listening!');
  });

  function handleRequestBad(request, response) {
    response.end('You are a loser');
  }

  var badServer = http.createServer(handleRequestBad);

  badServer.listen(port2, function(){
    console.log('Bad server is listening')
  });
