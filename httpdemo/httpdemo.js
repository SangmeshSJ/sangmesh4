var http = require('http');
//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("Hello World");
    res.end(); //end the response

}).listen(7000); //the server object listens on port 8080
console.log("Server is running on port 7000")