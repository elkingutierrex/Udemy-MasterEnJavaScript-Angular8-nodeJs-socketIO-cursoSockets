var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io');

app.get('/hola-mundo', function(req, res){
    res.status(200).send('Hola mundo desde una ruta')
})
server.listen(6677, function(){
    console.log('Servidor esta funcionando en http://localhost:6677')
});