var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());


app.use(function(request,response){
    console.log("In comes a request to: " + request.url);
    let LessonsArray = [
{
    LessonID:1,
    Subject: "Math",
    availability:10,
    location:"56B",
    Price: 25,
    image:"https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});