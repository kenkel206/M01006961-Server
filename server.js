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
app.get('/lessons', function(request,response){
    let LessonsArray = [
{
    LessonID:1,
    Subject: "Math",
    availability:10,
    location:"56B",
    Image: "images/math.jpg",
    Price: 25,
    alt: "Math"
},
{
    LessonID: 2,
    Subject: "Science",
    availability:20,
    location:201,
    Image: "images/science.jpg",
    Price:30,
    alt: "Science"
},
{
    LessonID: 3,
    Subject: "English",
    availability:15,
    location:202,
    Image: "images/english.jpg",
    Price:25,
    alt: "English"
},
{
    LessonID: 4,
    Subject: "History",
    availability:25,
    location:203,
    Image: "images/history.jpg",
    Price:20,
    alt: "History"
},
   ];
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
