//accessing event module
const eve = require('events');
//declarations
const emitter = new eve.EventEmitter();
//register an listener
emitter.on('message',function(msg)
{
    console.log('In event listener', msg)//+ returns object hence use comma
})
//raise an event
emitter.emit('message',{id:1,name:'rashmi'})
