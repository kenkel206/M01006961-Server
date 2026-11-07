var express = require('express');
var app = express();
var cors = require('cors');
var path = require('path');
require("dotenv").config({ path: "./atlas-credentials.env" });
app.use(express.json());
app.use(cors());

const uri =  process.env.MONGODB_URI;

const { MongoClient } = require("mongodb");
const client = new MongoClient(uri);

const db = client.db("Website");

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas");
        return client;
    } catch (error) {
        console.dir(error);
    }
}
 connectToMongoDB();

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

app.post('/orders', async function(request,response){
    var body = request.body;
    let collection = await db.collection("orders");
    let result = await collection.insertOne(body);
    response.send(result)
    Console.log(result);
});

app.put("/lessons/:_id", async function(request, response) { 
    var body = request.body; 
    let collection = await db.collection("Lessons"); 
    let tempid = request.params._id; 
     
    const query = { _id: new ObjectId(tempid) }; 
    const updates = { 
      $set: request.body 
    }; 
    result = await collection.updateOne(query, updates); 
    response.send(result); 
    console.log(result); 
});

var PublicPath = path.resolve(__dirname, "images");
app.use("/images", express.static(PublicPath));
app.use("/images", function(request,response){
   response.status(404).send("Image not found!");
});
app.put("/lessons/:_id", async function(request, response) { 
 
    var body = request.body; 
    let collection = await db.collection("Lessons"); 
    let tempid = request.params._id; 
     
    const query = { _id: new ObjectId(tempid) }; 
    const updates = { 
      $set: request.body 
    }; 
    result = await collection.updateOne(query, updates); 
    response.send(result); 
    console.log(result); 
}); 
app.use(function(request,response,next){
    response.status(404);
    response.send("Error 404: Page not found");
});
app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});
