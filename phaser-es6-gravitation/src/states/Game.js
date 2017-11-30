/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'

export default class extends Phaser.State {
  init() {}
  preload() {
    this.game.time.advancedTiming = true;
  }

  create()
  {
    // Add a Custom Banner
    // const bannerText = 'Phaser + ES6 + Webpack'
    // let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    // banner.font = 'Bangers'
    // banner.padding.set(10, 16)
    // banner.fontSize = 40
    // banner.fill = '#77BFA3'
    // banner.smoothed = false
    // banner.anchor.setTo(0.5)

    // Create a new Instance of a Sprite Object
    // this.mushroom = new Mushroom({
    //   game: this.game,
    //   x: this.world.centerX,
    //   y: this.world.centerY,
    //   asset: 'mushroom'
    // })

    // Add the new Instance of a Sprite to the Game
    // this.game.add.existing(this.mushroom)


    // => Phaser-Gravitation Importation

    // let map,
    //     layer,
    //     layer2,
    //     layer3,
    //     player,
    //     star,
    //     star2,
    //     star3,
    //     star4,
    //     stars,
    //     bullet,
    //     bullet2,
    //     cursors,
    //     fireButton,
    //     score = 3,
    //     scoreText,
    //     powerUps = 0,
    //     tileSprite,
    //     invincibleTime = 100,
    //     starStartingPositionX,
    //     starStartingPositionY,
    //     playerStartingPositionX,
    //     playerStartingPositionY;
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.powerUps = 0;
    this.invincibleTime = 100;

    // MAP OBJECT
    this.map = this.add.tilemap('map');
    // Level 1
    this.map.addTilesetImage('desert', 'desert');
    // Level 2
    // map.addTilesetImage('mininicular', 'mininicular');

    this.layer3 = this.map.createLayer('Tile Layer 3');
    this.layer3.scrollFactorX = 0.5;
    this.layer3.scrollFactorY = 0.5;
    this.layer2 = this.map.createLayer('Tile Layer 2');
    this.layer2.scrollFactorX = 0.75;
    this.layer2.scrollFactorY = 0.75;
    this.layer = this.map.createLayer('Tile Layer 1');
    this.map.setCollision(1, true, this.layer);
    // layer2.resizeWorld();
    this.layer.resizeWorld();


    // POWER UPS OBJECT
    // Level 1 Position
    this.starStartingPositionX = 350;
    this.starStartingPositionY = this.game.world.height - 100;

    // Level 2 Position
    // starStartingPositionX = game.world.width - 350;
    // starStartingPositionY = 3000;
    this.stars = game.add.group();
    this.stars.enableBody = true;
    this.star = this.stars.create(this.starStartingPositionX, this.starStartingPositionY, 'star');
    this.star2 = this.stars.create(600, 1200, 'star');
    this.star3 = this.stars.create(800, 1200, 'star');
    this.star4 = this.stars.create(1000, 1200, 'star');
    this.star.body.gravity.y = 300;
    this.star.body.bounce.y = 0.3;

    // PLAYER OBJECT
    // Level 1 Position
    this.playerStartingPositionX = 300;
    this.playerStartingPositionY = game.world.height - 150;

    // Level 2 Position
    // playerStartingPositionX = 1560;
    // playerStartingPositionY = game.world.height - 150;
    this.player = game.add.sprite(this.playerStartingPositionX, this.playerStartingPositionY, 'ship');
    this.player.anchor.setTo(0.5, 0.5);
    this.game.physics.arcade.enable(this.player);

    this.player.rotation = - Math.PI/2;
    this.player.body.drag.x = 200;
    this.player.body.drag.y = 100;
    this.player.body.maxVelocity.set(300);
    this.player.body.bounce.y = 0;
    this.player.body.gravity.y = 300;
    this.player.body.collideWorldBounds = true;

    this.game.camera.follow(this.player);

    // WEAPON OBJECT
    this.bullet = game.add.weapon(100, 'bullet');
    this.bullet.scale = 0.1;
    this.bullet.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.bullet.bulletSpeed = 500;
    this.bullet.fireRate = 300;
    this.bullet.multiFire = true;
    this.bullet.bulletInheritSpriteSpeed = false;
    this.bullet.trackSprite(this.player, 16, 0, true);

    this.bullet2 = game.add.weapon(100, 'bullet');
    this.bullet2.scale = 0.1;
    this.bullet2.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.bullet2.bulletSpeed = 200;
    this.bullet2.fireRate = 300;
    this.bullet2.multiFire = true;

    // Keys
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.fireButton = this.game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    // HUD Object ?
    // Score
    this.score = 3;
    this.scoreText = this.game.add.text(16, 16, this.score, {fontSize: '32px', fill: '#fff'});
    this.scoreText.fixedToCamera = true;
    // Fullscreen
    this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
  }

  update () {
    // Collision Methods
    // Player VS PowerUp Func
    this.collectStar = function(player, star) {
      star.kill();
      this.powerUps++;
    }
    // Weapon VS Map Func
    this.destroyBullet = function(bullet, layer) {
      bullet.kill();
    }
    // Player VS Map
    this.hitWall = this.game.physics.arcade.collide(this.player, this.layer);
    // PowerUp VS Map
    this.game.physics.arcade.collide(this.stars, this.layer);
    // Player VS PowerUp
    this.game.physics.arcade.overlap(this.player, this.stars, this.collectStar, null, this);
    // Weapon VS Map
    this.game.physics.arcade.collide(this.bullet.bullets, this.layer, this.destroyBullet);

    // Shield Timer
    if (this.invincibleTime > 0){
      this.invincibleTime--;
    }

    // Shield Destroy Method
    if (this.invincibleTime == 0 && this.player.shield){
      this.player.shield.destroy();
    }

    // Losing a life on PlayerHitWall AND Shield Create Method
    if (this.hitWall && this.invincibleTime == 0){
      this.score = this.score - 1;
      this.scoreText.text = this.score;
      this.invincibleTime = 100;
      this.player.shield = game.add.sprite(16, 0, 'shield');
      this.player.shield.anchor.set(0.5);
      this.player.shield.scale.set(0.5);
      this.player.addChild(this.player.shield);
    }

    // Kill Player when No More Life
    if (this.score <= 0){
      this.player.kill();
    }

    // Player Acceleration
    if (this.cursors.up.isDown){
      this.game.physics.arcade.accelerationFromRotation(this.player.rotation, 900, this.player.body.acceleration);
    } else {
      this.player.body.acceleration.set(0);
    }

    // Player Rotation
    if (this.cursors.left.isDown){
      this.player.body.angularVelocity = -200;
    } else if (this.cursors.right.isDown){
      this.player.body.angularVelocity = 200;
    } else {
      this.player.body.angularVelocity = 0;
    }

    // Weapon Trigger AND Configuration
    if (this.fireButton.isDown && this.powerUps == 1){
      this.bullet.fire();
      // bullet.fire();
      // bullet.fire();
    } else if (this.fireButton.isDown && this.powerUps == 2){
      this.bullet.bulletSpeed = 400;
      this.bullet.fire();
      this.player.rotation += 0.1;
      this.bullet.fire();
      this.player.rotation -= 0.2;
      this.bullet.fire();
      this.player.rotation += 0.1;
    } else if (this.fireButton.isDown && this.powerUps == 3){
      this.bullet.bulletSpeed = 50;
      this.bullet.fireRate = 1000;
      this.bullet.fire();
      for (var i = 0; i < 6; i++){
        this.player.rotation += 0.4 * i;
        this.bullet.fire();
        this.player.rotation -= 0.8 * i;
        this.bullet.fire();
        this.player.rotation += 0.4 * i;
      }

        // && powerUps == 4
      // } else if (fireButton.isDown ) {
      // 	bullet.bulletSpeed = 200;
      // 	bullet.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;
      // 	bullet.bulletLifespan = 1000;
      // 	currentBullet = bullet.fire();
      // 	bullet.onKill.add(function(){
      // 		bullet2.trackSprite(this);
      // 		bullet2.fire();
      // 	}, this);
      // }
    }
  }

  render()
  {
    // Show FPS
    this.game.debug.text(game.time.fps || '--', 2, 14, "#00ff00");

    // Add to debug your Sprite in DEV Mode.
    // if (__DEV__) {
    //   this.game.debug.spriteInfo(this.player, 32, 32)
    // }
  }
}
