const express= require('express');
const router = express.Router()
const Marks = require('../models/marks')
const Student = require('../models/Student')
const mongoose = require('mongoose');
const maps = require ('../models/maps');

//const { response } = require('express');

const map =new Map();
let key = 'id';
let value = [
    {
        name :'Himanshu', age: '22', standard:'10'
    },
    {
        name:'rahul', age:'20', standard:'12'
    }
]
map[key]= value;

router.get('/show',(req,res) => {

    maps.find().then((result)=>{
        res.send(result)
    }).catch((error)=>{
        res.send(error)
    })
})
    
     

// map.set("1", "name");
// map.set("2", "age");
// map.set("3", "class");

//for(let [k,v] of map){
//console.log(k, ":" ,v);
//}

// const pobj1=new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         let name = [1]
//         resolve(name);
//         reject('error')
//     }, 2000);

// });

// pobj1.then((name)=>{
//     console.log(name);
// }). catch((error)=>{
//     console.log(error);
// });

// router.get('/show', async(req,res,next)=> {
//     try{
//              const studmarks = await Marks.find()
//              res.status(200).json(studmarks)
//     }catch (err){
//         res.status(404).json({
//             message:'student data not found'
//         })
//     }
   
// })

router.post('/map',(req,res,next) =>{
        
         
            const map1 = new maps({
            name: req.body.name,
            age: req.body.age,
            standard: req.body.standard
            })
            new Promise( (resolve, reject) => {
                if(res.status(200)) {
                    resolve(res)
                }else {
                    reject('not working')

                } 

            }).then((result => {
                map1.save().then((result)=>{
                    res.send(result)
                }).catch((error)=>{
                    res.send((error))
                })
            })).catch((error)=>{
                 res.send((error))
            })
        })
//     //const student = await Student.findById({_id:req.params.id});
//         const newMarks = new Marks({
//             //_id:new mongoose.Types.ObjectId,
//        // name: req.Student.name,
//         roll_no: req.body.roll_no,
//         english: req.body.english,
//         math: req.body.math,
//         science: req.body.science,
        
//     })


//      //const b1= await student_marks.save()  
//      try{
//         await  newMarks.save();
//      res.status(200).json(newMarks);
     
// }catch(error){
//     res.status(404).json({ 
//         message:'not insert data',
//     })

//     }
// });
// router.patch('/update', async(req,res) =>{
//     const student_marks = new student_marks ({
//         roll_no: req.body.roll_no,
//         english: req.body.english,
//         math: req.body.math,
//         science: req.body.science,
//     })

// try{
//     const a1= await student_marks.save()    
//     res.status(200).json({
//         message: 'data update sucessfully....',
//         a1 
//     });
// }catch(err){
//    res.status(404).json({
//     message: 'not update data',
//    })
// }
// })

// router.delete('/delete',async(req,res)=>{
//     try{
//         const a1= await student_marks.save()    
//         res.status(200).json({
//            message : 'data deleted succesfully!.......',
//            a1
//         })
//    }catch(err){
//        res.status(404).json({
//            message:'data not deleted',
//        })
//    }
//    })


 module.exports = router