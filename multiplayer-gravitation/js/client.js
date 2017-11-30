let Client = {};

Client.socket = io.connect();

Client.askNewPlayer = function () {
  Client.socket.emit('newplayer');
}

Client.sendPosition = function(x, y) {
  Client.socket.emit('myPosition', {x: x, y: y});
}

Client.socket.on('newPosition', function (player) {
  console.log('newPosition received!', player);
  Game.movePlayer(player.id, player.x, player.y);
});

Client.socket.on('newplayer', function (player) {
  Game.addNewPlayer(player.id, player.x, player.y);
});

Client.socket.on('myId', function (player) {
  Game.myId = player.id;
});

Client.socket.on('allplayers', function(players){
  console.log(players);
  for(let i = 0; i < players.length; i++){
    Game.addNewPlayer(players[i].id, players[i].x, players[i].y);
  }
});

Client.socket.on('remove', function (id) {
  Game.removePlayer(id);
});
