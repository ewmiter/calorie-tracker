// dependencies
const express = require("express");
const bodyparser = require("body-parser");
const session = require('express-session')
const colors = require('colors');

// varables
colors.enable();
let app = express()
let host = "127.0.0.1"
let port = 8080

//defaults
app.set('trust proxy', 1);
app.use(session({
    secret: 'ABCD1234',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))


app.use((req,res,next)=>{
    console.log("Request".brightMagenta +" from "+req.ip.brightCyan+" for "+req.originalUrl.brightRed+" at " + new Date().toLocaleTimeString().brightYellow)

    next();
});

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

//routes
app.get("/",(req,res) =>{
    res.send("test");
});

app.get("/GetUserData",(req,res) =>{
    if(req.session.user == undefined){
        res.send(false);
        //res.json({"username":"Ewan"});
    }else{
        res.json({"username":"Ewan"});
    }
});

app.post("/login",(req,res) =>{
    if(req.body.username === "ewan" && req.body.password === "1"){
        console.log("login attempt U:"+req.body.username.brightYellow + " P:" + req.body.password.brightYellow +". It was "+"Correct".brightGreen);
        res.send(true)
        req.session.user = "ewan"
        req.session.save();
    }else{
        console.log("login attempt U:"+req.body.username.brightYellow + " P:" + req.body.password.brightYellow +". It was "+"Incorrect".brightRed);
        res.send(false)
   }
});

app.listen(port,host,(err) => {
    console.log("Server is listning on "+host.brightCyan+":".brightRed + port.toString().brightCyan)
});