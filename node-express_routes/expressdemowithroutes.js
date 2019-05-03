const express = require('express');//using express module 
const app = express();//exporting express function from the module
//route methods
app.get('/',function(req,res){
    res.send('This is root path');
})
app.get('/home',function(req,res){
    res.send('This is home page');
})
//we will start the server
app.listen(1000,function(){
    console.log('server is running on port 1000')
})
