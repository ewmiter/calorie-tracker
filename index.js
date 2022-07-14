// dependencies
const express = require("express");
const bodyparser = require("body-parser");
var session = require('express-session')

// varables
var app = express()
var host = "127.0.0.1"
var port = 8080

//defaults
app.set('trust proxy', 1);
app.use(session({
    secret: 'ABCD1234',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))


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

app.get("/GetUserData",(req,res) =>{
    console.log(req.session)
    if(req.session.user == undefined){
        //res.send(false);
        res.json({"username":"Ewan"});
    }else{
        res.json({"username":"Ewan"});
    }
});

app.post("/login",(req,res) =>{
    if(req.body.username === "ewan" && req.body.password === "1"){
        console.log("login attempt U:"+req.body.username + " P:" + req.body.password +". It was Correct");
        res.send(true)
        req.session.user = "ewan"
        req.session.save();
    }else{
        console.log("login attempt U:"+req.body.username + " P:" + req.body.password +". It was Incorrect");
        res.send(false)
   }
});

app.listen(port,host,(err) => {
    console.log("Server is listning on "+host+":"+port)
});