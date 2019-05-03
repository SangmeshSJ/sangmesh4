
    getEmployee = function(){
        console.log("In GetEmployees");
    }

    getLogin = function(name){
        console.log("In GetLogin "+ name);
    }

//creating the instance or variable directly
// multiple objects sending from module.exports
//exporting or using in the app1.js
module.exports = {
    emp:getEmployee,
    login:getLogin
}