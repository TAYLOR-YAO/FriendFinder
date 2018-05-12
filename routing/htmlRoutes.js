var express = require("express");
var htmlRouter = express.Router();
var path = require('path')

htmlRouter.get("/survey", (req, res)=>{
    res.sendFile(path.join(__dirname, "../app/public/survey.html"));
});

htmlRouter.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "../app/public/home.html"));
});
module.exports = htmlRouter;
            
        
          