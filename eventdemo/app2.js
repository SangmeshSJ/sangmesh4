const eve = require('events');
const event = new eve.EventEmitter()
var timer;
event.once("Start",(starttimer)=>{
    var i = starttimer;
    console.log("timer is started");
    timer = setInterval(()=>{
        console.log(i)
    })
})