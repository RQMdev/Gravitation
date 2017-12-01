const gameWidth   = 1920,
      gameHeight  = 1080

let gravitation = document.getElementById('gravitation'),
    docElement  = document.documentElement,
    width       = docElement.clientWidth > gameWidth ? gameWidth : docElement.clientWidth,
    height      = docElement.clientHeight > gameHeight ? gameHeight : docElement.clientHeight,
    game        = new Phaser.Game(width, height, Phaser.AUTO, gravitation)

let Game = {}

Game.init = function () {
  game.stage.disableVisibilityChange = true;
  game.time.advancedTiming = true;
}

Game.preload = function() {

  game.load.tilemap('map', 'assets/maps/map1.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.image('terrain_tileset', 'assets/tilesets/terrain_tileset.png', 32, 32);
  game.load.image('desert', 'assets/tilesets/desert.png');
  game.load.image('mininicular', 'assets/tilesets/mininicular.png');
  game.load.image('bg', 'assets/sprites/debug-grid-1920x1920.png');
  game.load.image('starfield', 'assets/sprites/starfield.jpg');
  game.load.image('ground', 'assets/sprites/platform.png');
  game.load.image('star', 'assets/sprites/star.png');
  game.load.image('ship', 'assets/sprites/ship.png');
  game.load.image('bullet', 'assets/sprites/bullet.png');
  game.load.image('shield', 'assets/sprites/shield2.png');
}

Game.create = function () {
  Game.playerMap = {};
  Game.map = game.add.tilemap('map');
  Game.map.addTilesetImage('desert', 'desert');
  Game.layer3 = Game.map.createLayer('Tile Layer 3');
  Game.layer3.scrollFactorX = 0.5;
  Game.layer3.scrollFactorY = 0.5;
  Game.layer2 = Game.map.createLayer('Tile Layer 2');
  Game.layer2.scrollFactorX = 0.75;
  Game.layer2.scrollFactorY = 0.75;
  Game.layer = Game.map.createLayer('Tile Layer 1');
  Game.map.setCollision(1, true, Game.layer);
  // layer2.resizeWorld();
  Game.layer.resizeWorld();

  game.physics.startSystem(Phaser.Physics.ARCADE);

  Game.playerGroup = game.add.group();

  Game.cursors = game.input.keyboard.createCursorKeys();
  Game.fireButton = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);

  Client.askNewPlayer();
}

Game.update = function () {
  let hitWall = game.physics.arcade.collide(Game.playerGroup, Game.layer);

  if (Game.playerMap[Game.myId] !== undefined){

    Client.sendPosition(Game.playerMap[Game.myId].body.x, Game.playerMap[Game.myId].body.y);

    if (Game.cursors.up.isDown){
      game.physics.arcade.accelerationFromRotation(
        Game.playerMap[Game.myId].rotation,
        900,
        Game.playerMap[Game.myId].body.acceleration
      );
    } else {
      Game.playerMap[Game.myId].body.acceleration.set(0);
    }
  }
}

Game.render = function () {
  // Show FPS
  this.game.debug.text(game.time.fps || '--', 2, 14, "#00ff00");
}

Game.addNewPlayer = function (id, x, y) {
  Game.playerMap[id] = Game.playerGroup.create(x, y, 'ship');
  Game.playerMap[id].anchor.setTo(0.5 , 0.5);

  game.physics.arcade.enable(Game.playerMap[id]);

  Game.playerMap[id].rotation = - Math.PI/2;
  Game.playerMap[id].body.drag.x = 200;
  Game.playerMap[id].body.drag.y = 100;
  Game.playerMap[id].body.maxVelocity.set(300);
  Game.playerMap[id].body.gravity.y = 300;
  Game.playerMap[id].body.collideWorldBounds = true;

  game.camera.follow(Game.playerMap[Game.myId]);
}

Game.movePlayer = function (id, x, y) {
  console.log('Game.movePlayer called!');
  // Game.playerMap[id].body.moves = false;
  if (Game.playerMap !== undefined){
    Game.playerMap[id].x = x;
    Game.playerMap[id].y = y;
  }
  // Game.playerMap[id].body.moves = true;
  // let player    = Game.playerMap[id];
  // let distance  = Phaser.Math.distance(player.x, player.y, x, y);
  // let duration  = distance;
  // let tween     = game.add.tween(player);
  // tween.to({x: x, y: y}, duration);
  // tween.start;
}

Game.removePlayer = function (id) {
  Game.playerMap[id].destroy();
  delete Game.playerMap[id];
}

game.state.add('Game', Game)
game.state.start('Game')
