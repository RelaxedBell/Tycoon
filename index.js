var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  io.emit('chat message', 'User connected');
  
  socket.on('click', function() {
    io.emit('click2');
  });
  
  socket.on('disconnect', function(){
    io.emit('chat message', 'User disconnected');
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
