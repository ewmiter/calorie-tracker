// dependencies
const express = require("express")

// varables
var app = express()
var host = "127.0.0.1"
var port = 8080

//defaults
app.use((req,res,next)=>{
    console.log("Request from "+req.ip+" for "+req.originalUrl)
    next();
});

//routes
app.get("/",(req,res) =>{
    res.send("test");
})




app.listen(port,host,(err) => {
    console.log("Server is listning on "+host+":"+port)
})