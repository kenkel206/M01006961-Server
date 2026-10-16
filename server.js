var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());


app.use(function(request,response){
    console.log("In comes a request to: " + request.url);
    response.end("hello, world!");
});

app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});