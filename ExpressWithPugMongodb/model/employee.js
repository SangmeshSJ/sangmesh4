let mongoose = require('mongoose');
let EmployeeSchema = mongoose.Schema({
    empId:{
        type:Number,
        required:true
    },
    empName:{
        type:String,
        required:true
    },
    empDept:{
        type:String,
        required:true
    },
    empSalary:{
        type:Number,
        required:true
    }
},{collection:'employeedata'});
module.exports=mongoose.model('Employee',EmployeeSchema)