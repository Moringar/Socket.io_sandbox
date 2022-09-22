//create http server w/Express.
var app = require('express')();
var http = require('http').Server(app);

// create new socket.io instance attached to http server. 
var io = require('socket.io')(http);

//Serve the html to the client:
app.get('/', function(req, res){ res.sendFile(__dirname+ '/index.html');
});


// io.on event handler, handles connections, disconnections, ect en using socket object.
//When a user connects:
io.on('connection', function(socket) {
    console.log('A user connected');
    

    //When he disconnects:
    socket.on('disconnect', function() {
    console.log('A user disconnected');
    });


});


//Start server
http.listen(3000, function(){
   console.log('listening on *:3000');
});