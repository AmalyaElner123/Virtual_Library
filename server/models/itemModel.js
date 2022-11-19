const mongoose = require('mongoose');

let itemSchema = new mongoose.Schema({
    idItem   : String ,
    idOwner  : String ,
    idBorrow : String ,
    name     : String ,
    category : [String] ,
    status   : Boolean ,
    rate     : Number ,
    borrowsNum : Number ,
    openText   : String,
    uploadDate : String,
    img        : String
})
let itemModel = mongoose.model('items',itemSchema)

module.exports = itemModel;