// dependencies
const express = require("express");
const bodyparser = require("body-parser");

// varables
var app = express()
var host = "127.0.0.1"
var port = 8080

//defaults
app.use((req,res,next)=>{
    console.log("Request from "+req.ip+" for "+req.originalUrl)
    next();
});

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

//routes
app.get("/",(req,res) =>{
    res.send("test");
});


app.post("/login",(req,res) =>{
    if(req.body.username === "1" && req.body.password === "1"){
        console.log("login attempt U:"+req.body.username + " P:" + req.body.password +". It was Correct");
        res.send(true)
    }else{
        console.log("login attempt U:"+req.body.username + " P:" + req.body.password +". It was Incorrect");
        res.send(false)
    }
});

app.listen(port,host,(err) => {
    console.log("Server is listning on "+host+":"+port)
});