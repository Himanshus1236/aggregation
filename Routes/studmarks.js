const express= require('express');
const router = express.Router()
const Marks = require('../models/marks')
const Student = require('../models/Student')
const mongoose = require('mongoose');

router.get('/show', async(req,res,next)=> {
    try{
             const studmarks = await Marks.find()
             res.status(200).json(studmarks)
    }catch (err){
        res.status(404).json({
            message:'student data not found'
        })
    }
   
})

router.post('/insert', async(req,res,next) =>{

    //const student = await Student.findById({_id:req.params.id});
        const newMarks = new Marks({
            //_id:new mongoose.Types.ObjectId,
       // name: req.Student.name,
        roll_no: req.body.roll_no,
        english: req.body.english,
        math: req.body.math,
        science: req.body.science,
        
    })


     //const b1= await student_marks.save()  
     try{
        await  newMarks.save();
     res.status(200).json(newMarks);
     
}catch(error){
    res.status(404).json({ 
        message:'not insert data',
    })

    }
});
router.patch('/update', async(req,res) =>{
    const student_marks = new student_marks ({
        roll_no: req.body.roll_no,
        english: req.body.english,
        math: req.body.math,
        science: req.body.science,
    })

try{
    const a1= await student_marks.save()    
    res.status(200).json({
        message: 'data update sucessfully....',
        a1 
    });
}catch(err){
   res.status(404).json({
    message: 'not update data',
   })
}
})

router.delete('/delete',async(req,res)=>{
    try{
        const a1= await student_marks.save()    
        res.status(200).json({
           message : 'data deleted succesfully!.......',
           a1
        })
   }catch(err){
       res.status(404).json({
           message:'data not deleted',
       })
   }
   })


module.exports = router