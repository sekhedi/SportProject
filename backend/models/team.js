//import mongoose module
const mongoose = require('mongoose');
//create team shema
const teamShema = mongoose.Schema({
    // attr: type
    name: String,
    owner: String,
    foundation: Number,
    players:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Player" // nom de model 
        }
    ]
});
// affect model name to shema
const team = mongoose.model("Team", teamShema);
//make match importable
module.exports = team;