var http = require("http");
var url = require("url");

function start(port, route, handlerMap, nomapHandler) {
  function onRequest(req, resp) {
    var pathname = url.parse(req.url).pathname;
    console.log("request for " + pathname + " received.");
    route(handlerMap, pathname, resp, req, nomapHandler);
  }
  
  http.createServer(onRequest).listeon(port);
  console.log("Server has started listen at " + port);
}
exports.start = start;
