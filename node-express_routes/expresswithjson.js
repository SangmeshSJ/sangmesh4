const express =  require('express');
var app = express();
app.use(express.json());
//enable the adding a middle ware it is used for request presessing
//define some aray object
const courses = [
    {"id":1,"name":"rashmi"},
    {"id":2,"name":"anushka"}
]

//route methods
app.get('/',function(req,res){
    res.send('Root Path');
});
app.get('/home',function(req,res){
    res.send('You are in home page')
});


//get all the courses
app.get('/courses',function(req,res){
    res.send(courses);
    console.log(courses)
});

//get only one course based on id
app.get('/courses/:id',function(req,res){
   const course = courses.find(c=> c.id === parseInt(req.params.id))
   if(! course)
   res.send('course with given id doesnot exists');

   res.send(course)
});

//post the course info by incrementing the id 
app.post('/api/courses',(req,res)=>{
    if(!req.body.name || req.body.name.length<3)
    {
        res.status(400).send('Name is required and should be minimum 3 char');
        return;
    }
    const course={
    id: courses.length+1,
    name: req.body.name
    };
    courses.push(course);
    res.send(course);
})

//deletes all the ids that exist below the given id in the array
// app.delete('/courses/:id',(req,res)=>{
//     courses.splice(req.params.id)
//     res.send(courses)
//     })

//deleting based on id
    app.delete('/courses/:id',(req,res)=>{
        var id = req.params.id-1;//indexing
        courses.splice(id,1)
        res.send(courses)
        })


// defining the port dynamically
const port = process.env.PORT || 2000;
app.listen(port,function(){
    console.log(`Server is running on port ${port}`)
})
