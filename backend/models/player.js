//import mongoose module
const mongoose = require('mongoose');
//create player shema
const playerShema = mongoose.Schema({
    // attr: type

    name: String,
    number: Number,
    age: Number,
    position: String,
    tId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Team"  //nom de model de id 
    }
});
// affect model name to shema
const player = mongoose.model("Player", playerShema);
//make match importable
module.exports = player;