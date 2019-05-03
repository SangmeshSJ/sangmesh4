const fs=require('fs');
fs.writeFileSync('input.txt','Hello Data!',function (err)
{
    if (err)
    console.log(err);
    else
    console.log('Write operation complete.');
});
// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());
console.log("Program Ended");

