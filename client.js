window.onload = function(){
	 var socket = io();
	 console.log("ca marche");
	  $('form').submit(function(){
		socket.emit('chatmessage', $('#m').val());
		$('#m').val('');
		return false;
	  });
	  
	 socket.on('chatmessage', function(msg){
		$('#messages').append($('<li>').text(msg));
	});
	  
  }