// import express module BE
const express = require('express');
// import body-parser
const bodyParser = require('body-parser');
// import bcrypt
const bcrypt = require('bcrypt');
// import
const jwt = require('jsonwebtoken');
const session = require('express-session');
//import mongoose

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');
//creates express application (app)
const app = express();
const route = express.Router();
// app configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const secretKey = 'your-secret-key';
app.use(session({
secret: secretKey,
}));

// Models importaion
const Match = require("./models/match");
const Team = require("./models/team");
const Player = require("./models/player");
const User = require("./models/user");
// Security configuration

app.use((req, res, next) => {

  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(

    "Access-Control-Allow-Headers",

    "Origin, Accept, Content-Type, X-Requested-with, Authorization"

  );

  res.setHeader(

    "Access-Control-Allow-Methods",

    "GET, POST, DELETE, OPTIONS, PATCH, PUT"

  );

  next();

});

// BUSINESS LOGIC Match Service*****

// business Logic:add Match
app.post("/matches", (req, res) => {
  console.log("here into bl:add match", req.body);
  // create match instance (type:Match(nom de model))
  let match = new Match(req.body);
  // insert/ save match into matches (collections name)
  match.save();
  res.json({ msg: "is added valid" });
});
// business Logic:edit Match
app.put("/matches", (req, res) => {
  Match.updateOne({ _id: req.body._id }, req.body).then((result) => {
    console.log("update", result)
    if (nModified == 1) {
      res.json({ msg: " ubdate ok" });
    } else {
      res.json({ msg: " ubdate not ok" });

    }
  });

});

// business Logic:get all Matches
app.get("/matches", (req, res) => {
  Match.find().then(
    (docs) => {
      res.json({ T: docs });
    });
});

// business Logic:get  Match By ID
app.get("/matches/:id", (req, res) => {
  console.log("here into bl:get matche by id", req.params.id);
  Match.findById(req.params.id).then(
    (doc) => {
      res.json({ match: doc });
    });
});

// business Logic: search Match
app.post("/matches/search", (req, res) => {
  Match.find({ scoreOne: req.body.scoreOne, scoreTwo: req.body.scoreTwo }).then(
    (data) => {
      res.json({ T: data });
    });
});

// business logic: delete match
app.delete("/matches/:id", async (req, res) => {
  try {
    console.log("here into bl:delete matche by id", req.params.id);
    await Match.deleteOne({ _id: req.params.id }).then((result) => {
      console.log("here after", result)
      if (result.deletedCount == 1) {
        res.json({ msg: " delete ok" });
      } else {
        res.json({ msg: " delete non" });
      }
    });
  }
  catch (err) {
    console.log(err);
  };
});
// BUSINESS LOGIC Player Service*****

// business Logic:Get All Players
app.get("/players", (req, res) => {
  Player.find().then(
    (docs) => {
      res.json({ T: docs });
    });

});
// business Logic:Get Player by id
app.get("/players/:id", (req, res) => {
  console.log("here into bl:get player by id", req.params.id);
  Player.findById(req.params.id).then(
    (doc) => {
      res.json({ T: doc });
    });
});

// business logic: delete player
app.delete("/players/:id", async (req, res) => {
  try {
    console.log("here into bl:delete player by id", req.params.id);
    await Player.deleteOne({ _id: req.params.id }).then((result) => {
      console.log("here after", result)
      if (result.deletedCount == 1) {
        res.json({ msg: " delete ok" });
      } else {
        res.json({ msg: " delete notok" });
      }
    });
  }
  catch (err) {
    console.log(err);
  };
});
// business Logic:edit Player
app.put("/players", (req, res) => {
  Player.updateOne({ _id: req.body._id }, req.body).then((result) => {
    console.log("update", result)
    if (nModified == 1) {
      res.json({ msg: " ubdate ok" });
    } else {
      res.json({ msg: " ubdate not ok" });

    }
  });

});
// business Logic:add Player
app.post("/players", (req, res) => {
  console.log("here into bl:add player", req.body);
  Team.findById(req.body.teamId).then((doc)=>{
    console.log("here team",doc);
    if (!doc) {
      res.json({ msg: "team not found" });
    } else {
      // add player
      const playerobject =new Player({
        name:req.body.name,
        number:req.body.number,
        age:req.body.age,
        position:req.body.position,
        tId:doc_id// object id from model Team(collections teams)
      })
      
    }
  })
  playerobject.save();
  res.json({ msg: "is added valid" });
});

//BUSINESS LOGIC Team Service*****

// business Logic:Get All Teams
app.get("/teams", (req, res) => {
  Team.find().then(
    (docs) => {
      res.json({ T: docs });
    });

});
// business Logic:Get Team by id
app.get("/teams/:id", (req, res) => {
  console.log("here into bl:get team by id", req.params.id);
  Team.findById(req.params.id).then(
    (doc) => {
      res.json({ T: doc });
    });
});
// business logic: delete team
app.delete("/teams/:id", async (req, res) => {
  try {
    console.log("here into bl:delete team by id", req.params.id);
    await Team.deleteOne({ _id: req.params.id }).then((result) => {
      console.log("here after", result)
      if (result.deletedCount == 1) {
        res.json({ msg: " delete ok" });
      } else {
        res.json({ msg: " delete not ok" });
      }
    });
  }
  catch (err) {
    console.log(err);
  };
});
// business Logic:add Team
app.post("/teams", (req, res) => {
  console.log("here into bl:add team", req.body);
  let team = new Team(req.body);
  team.save();
  res.json({ msg: "is added valid" });
});
// business Logic:edit Team
app.put("/teams", (req, res) => {
  Team.updateOne({ _id: req.body._id }, req.body).then((result) => {
    console.log("update", result)
    if (nModified == 1) {
      res.json({ msg: " update ok" });
    } else {
      res.json({ msg: " update not ok" });

    }
  });

});
// BUSINESS LOGIC User Service*****

// business Logic:add User
app.post("/users/registre", (req, res) => {
  console.log("here into bl:add user", req.body);
  User.findOne({ email: req.body.email }).then((doc) => {
    if (doc) {
      res.json({ msg: "user exist" });

    } else {
      bcrypt.hash(req.body.pwd, 10).then((cruptedPwd) => {
        req.body.pwd = cruptedPwd;
        let user = new User(req.body);
        user.save();
        res.json({ msg: "is added valid" });

      });

    }
  });
});
// business Logic:login User
app.post("/users/login", (req, res) => {
  console.log("here into bl:login user", req.body);
  User.findOne({ email: req.body.email }).then((doc) => {
    console.log("user doc by email", doc);
    if (!doc) {
      console.log("email doses not exist");
      res.json({msg: "email doses not exist"})
    } else {
      //compare pwd 
      bcrypt.compare(req.body.pwd, doc.pwd).then((result) => {
        console.log("here result form bcrypt", result);
        if (result) {
          let userTosend = {
            id:doc._id,
            firstName: doc.firstName,
            lastName: doc.lastName,
            role: doc.role

          }
          let token=jwt.sign(userTosend,secretKey,{expiresIn:'1h'})
          console.log("here token",token);
          res.json({ msg: "welcom", user:token });
        } else {
          res.json({ msg: "chek pwd" });

        }
      });
    }
  });

});

//make app importable from another files
module.exports = app;
