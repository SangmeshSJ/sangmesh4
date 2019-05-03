//exporting both the functions(of a module) using hello variable
//1st way
var hello = {
    getData : function(){
        console.log("In GetData");
    },
    getLogin : function(){
        console.log("In GetLogin");
    }
};
module.exports=hello;


//exporting both the functions(of a module) using hello variable
//2nd way
module.exports.hello ={
    getEmployee : function(){
        console.log("In getEmployee");
    }
}