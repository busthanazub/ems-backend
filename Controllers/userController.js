
const users = require('../models/userSchema')q3

exports.register = async (req, res) => {
    // get image details
    console.log(req.file);
    const file = req.file.filename
    // get other user input from request
    const { id, name, age, designation, salary } = req.body
    if (!id || !name || !age || !designation || !salary ) {
       return res.status(404).json("All fields are required")
    }
    else {
        try {
            // check if the user is already registered
            const preuser = await users.findOne({ email })
            if (preuser) {
               return res.status(401).json("User already Exists")
            }
            else {
                const newuser = new users({id, name, age, designation, salary})
                await newuser.save()
                return res.status(201).json(newuser)
            }

        } catch (error) {
           return res.status(200).json(error)
        }
    }
}

exports.getEmployees = async(req,res)=>{
    // get search query from request 
    const search = req.query.search
    const query = {
        fname:{$regex:search,$options:"i"} //option using for avoid case sensentive
    }
    try{

        const allEmployees = await users.find(query)
        res.status(200).json(allEmployees)

    }
    catch(error){
        res.status(404).json(error)
    }
}

// view profile
exports.viewProfile = async(req,res)=>{
    const {_id} = req.params;
    // console.log(_id);
    try{
        const preuser = await users.findOne(_id)
        res.status(200).json(preuser);
    }
    catch(error){
        res.status(404).json("Employee does not exists")
    }
}
exports.deleteEmployee = async(req,res)=>{
    const {id} = req.params
    // console.log("worked");
    // remove details for the given user id
    try{
        // console.log("worked");
        const removeItem = await users.findByIdAndDelete({_id:id})
        res.status(200).json(removeItem)
        if(res.status===200)
        {
            getEmployees()

        }
    }
    catch(error){
        res.status(404).json(error)
    }
}

// update employee details
exports.updateEmployee=async(req,res)=>{
    const {id} = req.params;
    const { id, name, age, designation, salary} = req.body
    try{
        const  updateItem = await users.findByIdAndUpdate({_id:id},
            {id, name, age, designation, salary},
            {
                new:true
            })
            // to save mongodb
            await updateItem.save()
            res.status(200).json(updateItem)
    }
    catch(error){
        res.status(404).json(error)
    }
}