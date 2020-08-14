//Hulk
const express = require('express')
const PORT = 8080

const app = express()

//simple server
app.listen(PORT, function(){
	console.log("Server is up...@", PORT)
});

app.get('*', function(req, res){
	res.send("Hulk: Hulk SMASH!!!\n")
	//res.send("Prof. hulk: Hello there little fellow..")
})

/*app.get('/time', function(req, res){
	var datetime = new Date();
    	res.send("Prof. hulk: " + datetime.toString())	
})*/
