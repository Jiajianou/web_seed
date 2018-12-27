//reqired modules
const express = require('express');
const path = require('path');


//application initialization
const app = express();

//load view engine
app.set("views",path.join(__dirname,"views"));
app.set("view engine","pug");

//routes
app.get("/",function(req,res){
  res.render("index",{title: "hi world"});
});


//start the server, listen on port 3000 by default
app.listen(3000,function(){
  console.log("The server is running.");
});
