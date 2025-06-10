const Datastore = require('nedb-promises')
var express = require("express");
var server = express();

var bodyParser = require("body-parser");
let GameDB = Datastore.create(__dirname + "/gamedata.db");

server.use(express.static(__dirname + "/public"));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.post("/postscore", (req, res) => {
  GameDB.insert(req.body);

  const time = req.body.Time;
  GameDB.count({ Time: { $lt: time } }).then((count) => {
    const rank = count + 1;
    res.send(rank);
  });
});

server.post("/leaderboard", (req, res) => {
  GameDB.find({}, { _id: 0 }).sort({ "Time": 1 }).limit(3).then((docs) => {
    if (docs != null) {
      res.send(docs);
    }
  })
});



server.listen(80);
