window.onload = function() {

		var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update });

		function preload () {
				game.load.tilemap('map', 'assets/maps/map2.json', null, Phaser.Tilemap.TILED_JSON);
				game.load.image('terrain_tileset', 'assets/tilesets/terrain_tileset.png', 32, 32);
				game.load.image('mininicular', 'assets/tilesets/mininicular.png');
				game.load.image('bg', 'assets/sprites/debug-grid-1920x1920.png');
				game.load.image('starfield', 'assets/sprites/starfield.jpg');
				game.load.image('ground', 'assets/sprites/platform.png');
				game.load.image('star', 'assets/sprites/star.png');
				game.load.image('ship', 'assets/sprites/ship.png');
				game.load.image('bullet', 'assets/sprites/bullet.png');
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

		function create () {
				map = game.add.tilemap('map');
				map.addTilesetImage('mininicular', 'mininicular');
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
				stars = game.add.group();
				stars.enableBody = true;
				star = stars.create(game.world.width - 350, 3000, 'star');
				star.body.gravity.y = 300;
				star.body.bounce.y = 0.3;

				// Player
				player = game.add.sprite(1560, game.world.height - 150, 'ship');
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
				bullet = game.add.weapon(30, 'bullet');
				bullet.scale = 0.1;
				bullet.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
				bullet.bulletSpeed = 500;
				bullet.fireRate = 300;

				bullet.trackSprite(player, 16, 0, true);
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

			if (hitWall && invincibleTime == 0){
				score = score - 1;
				scoreText.text = score;
				invincibleTime = 100;
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

			if (fireButton.isDown && powerUps == 1){
				bullet.fire();
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
