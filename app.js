//Création du server http w/Express.
var app = require('express')();
var http = require('http').Server(app);

// Creation d'une nouvelle instance de socket.io attachée au serveur http. 
var io = require('socket.io')(http);

//Envoi du html au client connecté.
app.get('/', function(req, res){ res.sendFile(__dirname+ '/index.html');
});


// io.on event handler, gère les connections, déconnections, ect en utilisant l'obket socket.
//Quand quelqu'un se connecte, event 'connection':
io.on('connection', function(socket) {
    console.log('A user connected');
    

    //Quand quelqu'un se déconnecte, event 'disconnect':
    socket.on('disconnect', function() {
    console.log('A user disconnected');
    });


});


//lancement du server
http.listen(3000, function(){
   console.log('listening on *:3000');
});