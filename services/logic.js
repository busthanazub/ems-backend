
const db=require('./db')


   const allEmployees=()=>{
    return db.Employee.find().then((result)=>{
        if(result){
            return{
                statusCode :200,
                employee:result
            }
        }else{
            return{
                statusCode:401,
                message:"No Data Found"
            }
        }
    })
   }


const addEmployees=(id,name,age,designation,salary)=>{
    return db.Employee.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:401,
                message:"Employee Already exist"
            }
        }
        else{
            const newEmployee=new db.Employee({id,name,age,designation,salary})
            newEmployee.save()
            return{
                statusCode:200,
                message:"Employee Added Successfully"
            }
       }
    })

}


 const deleteEmployee=(id)=>{
    return db.Employee.deleteOne({id}).then((result)=>{
          if(result){
            return{
                statusCode:200,
                message:"Employee deleted successsfully"
            }
          }else{
            return{
                statusCode:404,
                message:"Employee not found"
            }
          }
    })
 }


  const getAnEmployee=(id)=>{
    return db.Employee.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                employee:result
            }
        }
    })
  }


 const editAnEmployee=(empid,id,name,age,designation,salary)=>{
    return db.Employee.findOne({id:empid}).then((result)=>{
        if(result){
            result.id=id;
            result.name=name;
            result.age=age;
            result.designation=designation;
            result.salary=salary;

              result.save()

              return{
                statusCode:200,
                message:'Employee details updated'
              }
        }else{
            return{
                statusCode:401,
                message:"Invalid Opertion"
            }
        }
    })
 }

   module.exports={
    allEmployees,
     addEmployees,
     deleteEmployee,
     getAnEmployee,
     editAnEmployee
   }