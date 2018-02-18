// Routes GET request

app.get("/app/data", function(request, response) {
	response.send("You've Arrived @ FriendFinder!");
	response.sendFile(path.join(__dirname, "home.html"));
});

app.get("app/data", function(request, response) {
	response.send(path.join(__dirname, "survery.html"));
});

// Route POST request
app.post("app/data", function(request, response) {
	response.send("You used " req.method);
});