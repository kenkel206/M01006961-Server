var express = require('express');
var app = express();
var cors = require('cors');
var path = require('path');
app.use(express.json());
app.use(cors());

app.use(function(request,response,next){
    console.log("In comes a request to: " + request.url);
    next();
});
app.get('/lessons', async function(request,response){
let collection = await db.collection("Lessons");  
let results = await collection.find({}).toArray();  
response.send(results); 
   });
app.use(function(request,response,next){
    console.log("In comes a request to: " + request.url);
    next();
});

app.post('/orders', function(request,response){
    var body = request.body;
    console.log("order received: " 
        + "\nName: " + body.name 
        + "\nPhone: " + body.Phone 
        + "\nEmail: " + body.Email);
    response.json({message: "Order received successfully"});
});


var PublicPath = path.resolve(__dirname, "images");
app.use("/images", express.static(PublicPath));
app.use("/images", function(request,response){
   response.status(404).send("Image not found!");
});
app.use(function(request,response,next){
    response.status(404);
    response.send("Error 404: Page not found");
});
app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});
