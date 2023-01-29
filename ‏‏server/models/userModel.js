
const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    userName : String ,
    userPassword : String ,
    email : String ,
    // address : {country:String,city:String,street:String,houseNum:Number},
    address : String ,
    phone : String ,
    rating : Number
})
let userModel = mongoose.model('users',userSchema)

module.exports = userModel;