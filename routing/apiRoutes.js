var express = require("express");
var apiRouter = express.Router();
var friends = require('../app/data/friends');


apiRouter.post("/friends", function(req, res) {
    var newUser= req.body;
    // console.log("New friend: ", newUser);
    friends.push(newUser);
    // console.log(" All friends: "+ JSON.stringify(friends));
    // console.log(friends)
    friends.forEach(friend => {
        var totalDiff = [];

        for(var i=0; i<friend.scores.length; i++){
                // console.log(friend.scores[i])
            var diff = Math.abs(friend.scores[i]-newUser.scores[i]);
            // console.log("Diff: "+diff)
            totalDiff.push(diff);
        }
        var sum = totalDiff.reduce(function(a,b){
            return a+b;
        })
        // console.log("Sum is: "+sum)
        friend.totalDiff = sum;
        // console.log('friend: ', friend);
         friends.sort(function(obj1, obj2) {
            return obj1.totalDiff - obj2.totalDiff;
        });
        
    }); 
    console.log(" Sorted frinds: ", friends)
    res.json(friends[1]);
  });

apiRouter.get("/friends", (req, res)=>{
    return res.json(friends)
    // console.log(freinds)
});

module.exports = apiRouter;