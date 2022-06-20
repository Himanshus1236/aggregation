
const express= require('express');
const mongoose = require ('mongoose');
const url = "mongodb+srv://Admin123:Admin123@cluster0.hoh9ymt.mongodb.net/?retryWrites=true&w=majority";
//const dotenv = require('dotenv');

const app = express();
//dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 5000
console.log(PORT,"PORT")

mongoose.connect(url);
const con = mongoose.connection

con.on('open', ()=> {
    console.log('connected...');
});

app.use(express.json());

var SRoutes = require("./Routes/Students");
var MRoutes = require("./Routes/studmarks");
app.use('/studmarks',MRoutes)
app.use('/Students',SRoutes)

  app.listen(PORT,() => {
    console.log('server started');
  }); 