//import mongoose module
const mongoose = require('mongoose');
//create match shema
const matchShema = mongoose.Schema({
    // attr: type
    scoreOne: Number,
    scoreTwo: Number,
    teamOne: String,
    teamTwo: String,
});
// affect model name to shema
const match = mongoose.model("Match", matchShema);
//make match importable
module.exports = match;