// Require import module 
var http = require("http");
var express = require("express");
var body-parser = require("body-parser");
var path = require("path");
var fs = require("fs");


// Define port for listening for incoming requests
var PORT = 3000;

// Sets up Express App
var app = express();

// Sets up Express app to handle data parsing
app.use(body-parser.urlencoded({ extended: false}));
app.use(body-parser.json());
app.use(body-parser.text());



// Start the server so it can begin to listen to client requests
server.listen(PORT, function() {
	// Log (server-side) when server started
	console.log("FriendFinder is listening on port: " + PORT);
});





// Use the HTTP package to create a server. Pass handleRequest function to access it's functionality
var server = http.createServer(handleRequest);


// Create a generic function to handle requests and responses
function handleRequest(request, response) {


	// Send the string to the client when user visits PORT URL
	respond.end("Find Friend at URL: " + request.url);

	// Use FS Package to read home.html file
	fs.readFile(__dirname + "/public/home.html", function(err, data) {

		// Respond to the client with HTML page and tell browser we are delivering home.html page
		res.writeHead(200, {"Content-Type": "text/html" });
		res.end(data);
	});

}



