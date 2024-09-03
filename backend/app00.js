// import express module BE
const express = require('express');
// import body-parser
const bodyParser = require('body-parser');
//import mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');
//creates express application (app)
const app = express();
// app configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Models importaion
const Match=require("./models/match");
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
// DB simulation Match Service*****
let matchesTab = [{ id: 1, scoreOne: 1, scoreTwo: 3, teamOne: 'fcb', teamTwo: 'man city' },
{ id: 2, scoreOne: 2, scoreTwo: 4, teamOne: 'est', teamTwo: 'realmadrid' },
{ id: 3, scoreOne: 3, scoreTwo: 3, teamOne: 'liver', teamTwo: 'inter' },
{ id: 4, scoreOne: 5, scoreTwo: 2, teamOne: 'roma', teamTwo: 'milan' },
];
//DB SIMULATION Player Service*****

let playersTab=[ {id:1,name:'cristiano',number:7,position:'ATK',age:38},
  {id:2,name:'modiritch',number:10,position:'GKR',age:38},
  {id:3,name:'rodyger',number:22,position:'DIF',age:31},
  {id:4,name:'maradona',number:7,position:'ATK',age:20},
];
// DB SIMULATION Team Service
let teamsTab= [
  {id: 1, name: "real Madrid",owner: "perez",foundation: 1960},
  {id: 2, name: "PSG",owner: "TAMIM ben hamed",foundation:1970 },
  {id: 3, name: "Man city",owner: "Abu Dhabi United Group ",foundation: 1899},
  {id: 4, name: "AC milan",owner: "RedBird Capital Partners",foundation: 1880},
]; 
// BUSINESS LOGIC Match Service*****

// business Logic:add Match
app.post("/matches", (req, res) => {
   console.log("here into bl:add match",req.body);
   let match=req.body;
   matchesTab.push(match);
   res.json({msg:"is added valid"}) ;
  });

// business Logic:edit Match
app.put("/matches", (req, res) => {
  console.log("here into bl:edit match", req.body);
  let newMatch = req.body;
  let pos = matchesTab.findIndex((elt) => elt.id == newMatch.id)
  matchesTab[pos] = newMatch;
  res.json({ msg: "ok" });
});

// business Logic:get all Matches
app.get("/matches", (req, res) => {
  console.log("here into bl:get all matches");
  res.json({ T: matchesTab });
});

// business Logic:get  Match By ID
app.get("/matches/:id", (req, res) => {
  console.log("here into bl:get matche by id");
  let match = matchesTab.find((elt)=> elt.id == req.params.id);
  res.json({ match: match });
});

// business Logic: search Match
app.post("/matches/search", (req, res) => {
  let Match = req.body;
  let matchesTabResult=matchesTab.filter((elt)=>
    elt.scoreOne==Match.scoreOne && elt.scoreTwo==Match.scoreTwo)
    console.log("search matches",matchesTabResult);
    res.json({ T:matchesTabResult  });
});

// business logic: delete match
 app.delete("/matches/:id", (req, res) =>{
  console.log("here into bl:delet match by id",req.params.id);
  let matchId=req.params.id;
  let pos=matchesTab.findIndex((elt)=>elt.id==matchId);
  matchesTab.splice(pos,1);
  res.json({msg:"isdelete valid"});

 });
// BUSINESS LOGIC Player Service*****

// business Logic:Get All Players
app.get("/players", (req, res) => {
  res.json({ T: playersTab });
});

// business logic: delete player
app.delete("/players/:id", (req, res) =>{
  console.log("here into bl:delet player by id",req.params.id);
  let playerId=req.params.id;
  let pos=playersTab.findIndex((elt)=>elt.id==playerId);
  playersTab.splice(pos,1);
  res.json({msg:"isdelete valid"});

 });
 // business Logic:add Player
app.post("/players", (req, res) => {
  console.log("here into bl:add player",req.body);
  let player=req.body;
  playersTab.push(player);
  res.json({msg:"is added valid"}) ;
 });

//BUSINESS LOGIC Team Service*****

// business Logic:Get All Teams
app.get("/teams", (req, res) => {
  res.json({ T: teamsTab });
});
// business logic: delete team
app.delete("/teams/:id", (req, res) =>{
  console.log("here into bl:delet team by id",req.params.id);
  let teamId=req.params.id;
  let pos=teamsTab.findIndex((elt)=>elt.id==teamId);
  teamsTab.splice(pos,1);
  res.json({msg:"isdelete valid"});

 });
 // business Logic:add Team
app.post("/teams", (req, res) => {
  console.log("here into bl:add team",req.body);
  let team=req.body;
  teamsTab.push(team);
  res.json({msg:"is added valid"}) ;
 });
//make app importable from another files
module.exports = app;