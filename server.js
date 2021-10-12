const dotenv = require('dotenv');
dotenv.config({path:'./config.env'})
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDb = require('./configDB/db')
const PORT = process.env.PORT ;
const custumer = require('./routes/custumer')
const app = express();
//cors Middelware

app.use(cors())

//Connect to database

connectDb();

 //BodyParser Middleware

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}))

//endpoint configurations

app.use('/custumer',custumer)



app.get('/',(req,res)=>res.send(`Hello my new Backend:)`));
app.listen(PORT,()=> console.log(`You are now listening @ port ${PORT}`))
