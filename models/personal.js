const  mongoose = require("mongoose");

const personalSchema = mongoose.Schema({
    _id : mongoose.Types.ObjectId,
    fullName : String,
    gotra : String
});


module.exports = mongoose.model('Personal', personalSchema);