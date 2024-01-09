
//import .env file content
require('dotenv').config();

//import express
const express=require('express');;

//import cors
const cors=require('cors');

//import mongoose
// const mongoose=require('mongoose');

//import router
const router=require('./Routes/Router');

//import connection.js
require('./db/connection');

//create server application
const server=express();

//PORT definition
PORT=3001 || process.env.PORT  //static || dynamically

// export uploads folder to client
server.use('/uploads',express.static('./uploads'))

//use corse
server.use(cors());

//to parse json to js
server.use(express.json())

//use routes 
server.use(router)

//define port and run the server application
server.listen((PORT),()=>{
    console.log(`Server is running on port ${PORT}`);
})

//request resolving
server.get('/',(req,res)=>{
    console.log(req.file);
    res.send('Get Request');
})