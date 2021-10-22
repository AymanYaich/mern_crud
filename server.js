const dotenv = require('dotenv');
dotenv.config({path:'./config.env'})
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDb = require('./configDB/db')
const PORT = process.env.PORT ;
const product = require('./routes/product');
const user = require('./routes/user')
const app = express();
const pathh = require('path');
const passport = require ('passport');
//cors Middelware

app.use(cors())

//Connect to database

connectDb();

 //BodyParser Middleware

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}))

//endpoint configurations

app.use('/product',product);
app.use('/user',user);

//Passport middilware
app.use(passport.initialize());
//Passport config
require('./config/passport')(passport)

if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"))
  app.get('*',(req,res)=>{
    res.sendFile(pathh.resolve(__dirname,'client','build','index.html'))
  })
}else{
  app.get('/',(req,res)=>{
    res.send("Api running")
  })
}

//app.get('/',(req,res)=>res.send(`Hello my new Backend:)`));
app.listen(PORT,()=> console.log(`You are now listening @ port ${PORT}`))
