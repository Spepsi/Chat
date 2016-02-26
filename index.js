var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get(/\/.*/, function(req, res){
  console.log(req.url);
  if (req.url == "/") { res.sendFile(__dirname +'/index.html'); }
  else {
    res.sendFile(__dirname + req.url);
  }
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket){

	//Connection
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  //Chat message
  socket.on('chatmessage', function(msg){
	io.emit('chatmessage',msg);
    console.log('message: ' + msg);
  });
  
});
