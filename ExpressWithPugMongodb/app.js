const express = require('express');

const path = require('path')

const mongoose = require('mongoose');

const bodyParser = require('body-parser')

//taking employee model here
let Employee=require('./model/employee')

//connect to mongodb
mongoose.connect('mongodb://localhost/mypugdb');
let db = mongoose.connection;
db.once('open',function(){
    console.log('Connection Open');
})
db.on('error',function(){
    console.log(err);
})

const app = express();

//load view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

// parse application/x-www-form-urlencoded--For inserting
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json--For Inserting
app.use(bodyParser.json())

//app routes
//rendering index in root path from the below code
app.get('/',function(req,res){
    Employee.find({},function(err,employeedata){
        res.render('index',{
            title:'This is Capgemini L&D',
            empData:employeedata,
            emg:'L&D Department'
        })
    })
})

app.get('/home',function(req,res){
    res.render('home',{
        mydata:'this is from home'
    })
})

app.get('/add',function(req,res){
    res.render('addemployee',{
        mydata:'this is capgemini l and d'
    })
})

app.post('/emp/addata',function(req,res){
    let emp=new Employee();
    emp.empId=req.body.eid;
    emp.empName=req.body.ename;
    emp.empDept=req.body.edept;
    emp.empSalary=req.body.esalary;
    emp.save(function(err){
        if(err){
        console.log('err')
        return;
        }
        else{
            res.redirect('/')
        }
    })
})

app.get('/deleteemp/:id',function(req,res){
    let queryDelete={_id:req.params.id};
    Employee.remove(queryDelete,function(err){
        if(err){
            console.log(err);
            return;
        }else{
            res.redirect('/');
        }
    })
})

//make the server run on port any port number
app.listen(1000,function(){
    console.log('Server is running on port number 1000')
})