var http = require('http');

var port1 = 7000;
var port2 = 7500;


function handleRequest1(request, response) {
  var requestedUrl = request.url;

  response.end('You are a God ' + requestedUrl);
}
function handleRequest2(request, response) {
  response.end('You are a Loser') + requestedUrl);
}
var server = http.createServer(handleRequest);

server.listen(port, function(err) {
  if (err){
    return console.log(err);
  }
  console.log('Server is now listening!')
});
