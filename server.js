
var io = require('socket.io')(3000, {cors: {origin: "*"}});
io.on('connection',(socket)=>
{
    console.log('a user is connected');
    socket.emit('message',"Hello World");
    socket.on('disconnect',()=>{
console.log('user disconnected');        
    });
    socket.on('chatmessage',msg=>{
        io.emit('message',msg);
    })

})