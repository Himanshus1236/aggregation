const mongoose = require ('mongoose');

const student_marksSchema = new mongoose.Schema({
    //name:{
        //type: String,

    //},
    roll_no:{
        type:String,
    },

    english:{
        type:String,
    },

    math:{
        type:String,
    },
    science:{
        type:String,
    }
})

   module.exports = mongoose.model('student_marks',student_marksSchema)
    
