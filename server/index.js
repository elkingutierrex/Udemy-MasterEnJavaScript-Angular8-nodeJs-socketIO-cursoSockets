var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(express.static('client'))

app.get('/hola-mundo', function(req, res){
    res.status(200).send('Hola mundo desde una ruta')
});

var messages =[{
    id:1,
    text:"Bienvenido al chat privado de Socket.io y nodeJS de elkingutierrex...",
    nickname:"Bot - elkingutierrex"

}]

io.on('connection', function(socket){
    console.log("el nodo con IP: " + socket.handshake.address + " se ha connectado...");

    socket.emit("messages", messages);
});

server.listen(6677, function(){
    console.log('Servidor esta funcionando en http://localhost:6677')
});