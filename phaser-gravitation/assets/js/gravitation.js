window.onload = function() {

		var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update });

		function preload () {
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

		var map;
		var layer;
		var layer2;
		var player;
		var stars;
		var score = 3;
		var scoreText;
		var powerUps = 0;
		var tileSprite;
		var invincibleTime = 100;
		var starStartingPositionX;
		var starStartingPositionY;
		var playerStartingPositionX;
		var playerStartingPositionY;

		function create () {
				map = game.add.tilemap('map');
				// Level 1
				map.addTilesetImage('desert', 'desert');

				// Level 2
				// map.addTilesetImage('mininicular', 'mininicular');

				// layer = map.createLayer(1);
				layer3 = map.createLayer('Tile Layer 3');
				layer3.scrollFactorX = 0.5;
				layer3.scrollFactorY = 0.5;
				layer2 = map.createLayer('Tile Layer 2');
				layer2.scrollFactorX = 0.75;
				layer2.scrollFactorY = 0.75;
				layer = map.createLayer('Tile Layer 1');
				map.setCollision(1, true, layer);
				// layer2.resizeWorld();
				layer.resizeWorld();

				game.physics.startSystem(Phaser.Physics.ARCADE);

				// Stars
				// Level 1 Position
				starStartingPositionX = 350;
				starStartingPositionY = 100;

				// Level 2 Position
				// starStartingPositionX = game.world.width - 350;
				// starStartingPositionY = 3000;
				stars = game.add.group();
				stars.enableBody = true;
				star = stars.create(starStartingPositionX, starStartingPositionY, 'star');
				star2 = stars.create(600, 1200, 'star');
				star3 = stars.create(800, 1200, 'star');
				star4 = stars.create(1000, 1200, 'star');
				star.body.gravity.y = 300;
				star.body.bounce.y = 0.3;

				// Player
				// Level 1 Position
				playerStartingPositionX = 300;
				playerStartingPositionY = game.world.height - 150;

				// Level 2 Position
				// playerStartingPositionX = 1560;
				// playerStartingPositionY = game.world.height - 150;
				player = game.add.sprite(playerStartingPositionX, playerStartingPositionY, 'ship');
				player.anchor.setTo(0.5, 0.5);
				game.physics.arcade.enable(player);

				player.rotation = - Math.PI/2;
				player.body.drag.x = 200;
				player.body.drag.y = 100;
				player.body.maxVelocity.set(300);
				player.body.bounce.y = 0;
				player.body.gravity.y = 300;
				player.body.collideWorldBounds = true;
				console.log(player.body);

				game.camera.follow(player);

				// Weapons
				bullet = game.add.weapon(100, 'bullet');
				bullet.scale = 0.1;
				bullet.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
				bullet.bulletSpeed = 500;
				bullet.fireRate = 300;
				bullet.multiFire = true;
				bullet.bulletInheritSpriteSpeed = false;
				bullet.trackSprite(player, 16, 0, true);

				bullet2 = game.add.weapon(100, 'bullet');
				bullet2.scale = 0.1;
				bullet2.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
				bullet2.bulletSpeed = 200;
				bullet2.fireRate = 300;
				bullet2.multiFire = true;



				console.log(bullet);


				// Keys
				cursors = game.input.keyboard.createCursorKeys();
				fireButton = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
				// Score
				scoreText = game.add.text(16, 16, score, {fontSize: '32px', fill: '#fff'});
				scoreText.fixedToCamera = true;
				// Fullscreen
				game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
		}


		function update() {
			// Collision
			var hitWall = game.physics.arcade.collide(player, layer);
			game.physics.arcade.collide(stars, layer);
			game.physics.arcade.overlap(player, stars, collectStar, null, this);
			game.physics.arcade.collide(bullet.bullets, layer, destroyBullet);
			if (invincibleTime > 0){
				invincibleTime--;
			}

			if (invincibleTime == 0 && player.shield){
				player.shield.destroy();
			}

			if (hitWall && invincibleTime == 0){
				score = score - 1;
				scoreText.text = score;
				invincibleTime = 100;
				player.shield = game.add.sprite(16, 0, 'shield');
				player.shield.anchor.set(0.5);
				player.shield.scale.set(0.5);
				player.addChild(player.shield);
			}

			if (score <= 0){
				player.kill();
			}

			if (cursors.up.isDown){
				game.physics.arcade.accelerationFromRotation(player.rotation, 900, player.body.acceleration);
			} else {
				player.body.acceleration.set(0);
			}

			if (cursors.left.isDown){
				player.body.angularVelocity = -200;
			} else if (cursors.right.isDown){
				player.body.angularVelocity = 200;
			} else {
				player.body.angularVelocity = 0;
			}
			//
			if (fireButton.isDown && powerUps == 1){
				bullet.fire();
				// bullet.fire();
				// bullet.fire();
			} else if (fireButton.isDown && powerUps == 2){
				bullet.bulletSpeed = 400;
				bullet.fire();
				player.rotation += 0.1;
				bullet.fire();
				player.rotation -= 0.2;
				bullet.fire();
				player.rotation += 0.1;
			} else if (fireButton.isDown && powerUps == 3){
				bullet.bulletSpeed = 50;
				bullet.fireRate = 1000;
				bullet.fire();
				for (var i = 0; i < 6; i++){
					player.rotation += 0.4 * i;
					bullet.fire();
					player.rotation -= 0.8 * i;
					bullet.fire();
					player.rotation += 0.4 * i;


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
			}
		}

		function collectStar (player, star){
			star.kill();
			powerUps++;
		}

		function destroyBullet (bullet, layer){
			bullet.kill();
		}

};
