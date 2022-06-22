const mongoose = require ('mongoose');

const mapSchema = new mongoose.Schema({
    name:{
        type: String,

    },
    age:{
        type:String,
    },

    standard:{
        type:String,
    }

})

   module.exports = mongoose.model('maps',mapSchema)
    