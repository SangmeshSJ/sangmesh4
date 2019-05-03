const fsobj = require('fs');
fsobj.readFile('input.txt',function (err,data)
 {
        if (err) {
            console.log("Error: problem in reading the file");
        }
        else {
            console.log('reading');
            console.log(data.toString());
        }
});