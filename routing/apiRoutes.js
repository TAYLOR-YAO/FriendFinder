var express = require("express");
var apiRouter = express.Router();
var friends = require('../app/data/friends');

apiRouter.post("/friends", function(req, res) {
    var newUser= req.body;
    friends.push(newUser);
    friends.forEach(friend => {
        var totalDiff = [];

        for(var i=0; i<friend.scores.length; i++){
            var diff = Math.abs(friend.scores[i]-newUser.scores[i]);
            totalDiff.push(diff);
        }
        var sum = totalDiff.reduce(function(a,b){
            return a+b;
        })
        friend.totalDiff = sum;
         friends.sort(function(obj1, obj2) {
            return obj1.totalDiff - obj2.totalDiff;
        });
        
    }); 
    console.log(" Sorted frinds: ", friends)
    res.json(friends[1]);
  });

apiRouter.get("/friends", (req, res)=>{
    return res.json(friends)
});

module.exports = apiRouter;