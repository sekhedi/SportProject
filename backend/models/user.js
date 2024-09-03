//import mongoose module
const mongoose = require('mongoose');
//create user shema
const userShema = mongoose.Schema({
    // attr: type

    firstName: String,
    lastName: String,
    email: String,
    pwd: String,
    tel:String,
    role:String,
});
// affect model name to shema
const user = mongoose.model("User", userShema);
//make match importable
module.exports = user;