let express = require('express'),
    morgan  = require('morgan'),
    app     = express(),
    server  = require('http').Server(app),
    io      = require('socket.io').listen(server);

// Middlewares
app.use(morgan('dev'));

app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/assets', express.static(__dirname + '/assets'));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

server.listen(8081, function(){
  console.log("Server listening on ", server.address().port);
});

server.lastPlayerID = 0;

io.on("connection", function (socket) {
  socket.on('newplayer', function () {
    socket.player = {
      id: server.lastPlayerID++,
      x: randomInt(100,1800),
      y: randomInt(100,1000),
    };
    socket.emit('myId', socket.player);
    socket.emit('allplayers', getAllPlayers());
    socket.broadcast.emit('newplayer', socket.player);

    socket.on('myPosition', function(position){
      // console.log('server.myPosition Called !');
      socket.player.x = position.x;
      socket.player.y = position.y;
      socket.broadcast.emit('newPosition', socket.player);
    });

    socket.on('disconnect', function(){
      io.emit('remove', socket.player.id);
    });
  });

});

function getAllPlayers () {
  let players = [];
  Object.keys(io.sockets.connected).forEach(function(socketID){
    let player = io.sockets.connected[socketID].player;
    if (player) players.push(player);
  });
  return players;
}

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}
