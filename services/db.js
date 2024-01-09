//import mongoose
const mongoose = require('mongoose');

//create a connection string to connect db
const connectionString=process.env.DATABASE

//connect
mongoose.connect(connectionString,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log('Database Connected');
}).catch((error)=>{
    console.log(error);
})