var express = require('express');
var app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());

app.use(function(request,response,next){
    console.log("In comes a request to: " + request.url);
    next();
});
app.get('/lessons', function(request,response){
    let LessonsArray = [
{
    LessonID:1,
    Subject: "Math",
    availability:10,
    location:"56B",
    Price: 25,
    alt: "math"
},
{
    LessonID: 2,
    Subject: "science",
    availability:20,
    location:201,
    Price:30,
    alt: "science"
},
{
    LessonID: 3,
    Subject: "English",
    availability:15,
    location:202,
    Price:25,
    alt: "English"
},
{
    LessonID: 4,
    Subject: "History",
    availability:25,
    location:203,
    Price:20,
    alt: "History"
},
   ]
   response.json(LessonsArray);
});
app.use(function(request,response,next){
    console.log("In comes a request to: " + request.url);
    next();
});

app.post('/orders', function(request,response){
    var body = request.body;
    console.log("order received: " 
        + "\nName: " + body.name 
        + "\nPhone: " + body.phone 
        + "\nEmail: " + body.email);
    response.json({message: "Order received successfully"});
});

app.use(function(request,response,next){
    response.status(404);
    response.send("File not found");
});

app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});