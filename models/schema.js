//import mongoose
const mongoose=require('mongoose')

const userSchema=mongoose.Schema({

    id:{
        type:Number,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:String,
        required:true,
        unique:true,
    },
    designation:{
        type:String,
        required:true,
        trim:true
    },
    salary:{
        type:Number,
        required:true,
        unique:true,
    },
    
})

//create model
const users=mongoose.model('users',userSchema)

//export model
module.exports=users