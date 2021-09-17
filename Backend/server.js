const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const userRouter =require('./routers/Users');
app.use(cors());
app.use(bodyParser.json());
app.use(userRouter);


const PORT = 8001;
 app.listen(PORT,()=>{
     console.log(`App is running  on ${PORT}`);
 });

 const DB_URL = 'mongodb+srv://lakmal_12345:12345At@test.xdf3n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
 mongoose.connect(DB_URL).then(()=>{
     console.log('DB Connected ');
 }).catch((err)=>{
     console.log('DB Connection error', err);
 })