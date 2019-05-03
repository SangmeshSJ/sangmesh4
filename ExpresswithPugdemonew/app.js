const express = require('express');

const path = require('path')
//initialize the app object
const app = express();

//load the view engine
app.set('views',path.join(__dirname,"views"));
app.set("view engine","pug");
//defining the routes

app.get('/',function(req,res)
{
    let emp = [{
        empId:1001,
        empName:'Sangu',
        empDept:'IT',
        empSalary:1000
    },
    {
        empId:1002,
        empName:'Amruth',
        empDept:'IT',
        empSalary:2000
    }]
    res.render('index',{
        title:'This is my title for index page',
        empData:emp
    })
})//get close

// create another route as home
app.get('/home', function (req, res) {
    res.render('home', {
        mydata: 'this is my data for home'
    })
});

app.listen(5000,function(){
    console.log('Server is started on port 5000');
})

