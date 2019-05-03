
// const fs = require('fs');

// let student =[{
//     name: 'anu',
//     age: 5,
//     gender: 'female'
// }]
// let data = JSON.stringify(student);//added to json from student 

// fs.appendFile('student.json', data, (err)=>
// {
//     if(err)
//     {
//         throw err;
//     }
//     else{
//         console.log('Append operation is completed')
//     }
// });

// // fs.writeFile('student.json', data, (err)=>
// // {
// //     if(err)
// //     {
// //         throw err;
// //     }
// //     else{
// //         console.log('write operation is completed')
// //     }
// // });

// console.log('Program ended')


const fs = require('fs')
//write in file
let student = [{
        name:'rashmi ',
        age:25,
        gender:'female'
    }]
let data = JSON.stringify(student);

fs.writeFile('student1.json',data, (err)=> {
        if (err)
        throw err;
        else
        console.log('data write into the file')
    });

//appending in the file

let student2 = {
        name:'ali raj',
        age:9,
        gender:'male'
    }
console.log('this is the end of the program')

//append
fs.readFile('student1.json', (er,
    data) => {
    if (er)
     throw er;
     else {
        let read;
        read = JSON.parse(data);
        read.push(student2)
        read = JSON.stringify(read);
        fs.writeFile('student1.json',read, (err) => {
            if (err)
            throw err;
            else console.log('data appended into the file')
        });
    }
})


// const fs=require('fs');
// //write in file
// let student=[{
// name:'rashmi',
// age:25,
// gender:'female'
// }]
// let data=JSON.stringify(student);
// fs.writeFile('student1.json',data,(err)=>{
// if(err)
// throw err;
// else
// console.log('data write into the file')
// });
// //appending in the file
// // let student2={
// // name:'ali raj',
// // age:9,
// // gender:'male'
// // }
// // var data2=JSON.stringify(student2);
// // data2
// // fs.appendFile('student.json',data2,(err)=>{
// // if(err)
// // throw err;
// // else
// // console.log('data appended into the file')
// // });
// console.log('this is the end of the program')
// //append
// var read;
// fs.readFile('student1.json',(er,data)=>{
// if(er)
// throw er;
// else
// { read=JSON.parse(data);
// console.log(read);
// read.push(student)
// read=JSON.stringify(read)
// console.log(read);
// fs.appendFile('student1.json',read,(err)=>{
// if(err)
// throw err;
// else
// console.log('data write into the file')
// });
// }
// })
// // fs.writeFile('student.json',read,(err)=>{
// // if(err)
// // throw err;
// // else
// // console.log('data write into the file')
// // });
// // //reading 
// // fs.readFile('student.json',(er,data)=>{
// // if(er)
// // throw er;
// // else
// // {var read2=JSON.parse(data);
// // console.log(read2);
// // }
// // })