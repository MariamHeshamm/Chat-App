
//var io = require('socket.io')(3000, {cors: {origin: "*"}});
const express = require('express');
const http = require('http');
var app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
 const path = require("path");
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

//app.use(express.static(__dirname+"/public"));


app.get('/', (req, res) => {
//   res.sendFile(__dirname + 'home.ejs');
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/client.js', (req, res) => {
    //   res.sendFile(__dirname + 'home.ejs');
      res.sendFile(path.join(__dirname, 'client.js'));
    });
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
server.listen(3000,'0.0.0.0', () => {
    console.log("http://localhost:"+ 3000);
  });