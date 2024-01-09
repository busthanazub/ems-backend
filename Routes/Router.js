//import express
const express=require('express')

// create router for express
const router=new express.Router()

//import userController
const userController=require('../Controllers/userController')

//import multer
const upload=require('../multerConfiguration/storageConfiguration')

//define routes for each http request
router.post('/employee/register',upload.single('user_profile'),userController.register)

router.get('/employee/getEmployee',userController.getEmployees)

router.get('/employee/viewProfile/:id',userController.viewProfile)
// delete employee
router.delete('/employee/deleteEmployee/:id',userController.deleteEmployee)

// update Employee
router.put('/employee/updateEmployee/:id',userController.updateEmployee)

module.exports=router;