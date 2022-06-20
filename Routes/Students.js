const express= require('express');
const router = express.Router()
const Student = require('../models/Student')
const marks = require('../models/marks')
const mongoose = require('mongoose');

router.get('/show', async(req,res,next)=> {
    try{
             const student = await Student.find()
             res.status(200).json(student)
    }catch (err){
        res.status(404).json({
            message:'student data not found'
        })
    }
   
})

router.post('/insert', async(req,res,next) =>{
    const student = new Student ({
        _id:new mongoose.Types.ObjectId,
        name: req.body.name,
        age: req.body.age,
        number: req.body.number,
    })

try{
     const a1= await student.save()    
     res.status(200).json({
        message : 'data insert succesfully!.......',
        a1
     })
}catch(err){
    res.status(404).json({
        message:'not insert data',
    })
}
})
router.patch('/update', async(req,res) =>{
    const stu = new stu ({
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        number: req.body.number,
    })

try{
    const a1= await student.save()    
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
module.exports = router