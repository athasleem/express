var mongoose =require('mongoose')
var mongoSchema =mongoose.Schema
var userSchema={
    "name":String,
    "location":String,
    "year":String
}

module.exports= mongoose.model('friends',userSchema)