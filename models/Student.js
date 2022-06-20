const mongoose = require ('mongoose')

const studentSchema = new mongoose.Schema({

    _id:mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required:true
    },
    age: {
        type:String,
        required:true
    },
    number: {
        type:String,
        required:true
    }
   
})

module.exports = mongoose.model('Student',studentSchema)