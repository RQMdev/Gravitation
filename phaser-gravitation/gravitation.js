window.onload = function() {

		var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update });

		function preload () {
				game.load.tilemap('map', 'assets/maps/map1.json', null, Phaser.Tilemap.TILED_JSON);
				game.load.image('terrain_tileset', 'assets/tilesets/terrain_tileset.png');
				game.load.image('bg', 'assets/sprites/debug-grid-1920x1920.png');
				game.load.image('starfield', 'assets/sprites/starfield.jpg');
				game.load.image('ground', 'assets/sprites/platform.png');
				game.load.image('star', 'assets/sprites/star.png');
				game.load.image('ship', 'assets/sprites/triangle.png');
				game.load.image('bullet', 'assets/sprites/bullet.png');
		}

		var platforms;
		var player;
		var stars;
		var score = 0;
		var scoreText;
		var powerUps = 0;
		var tileSprite;

		function create () {
				map = game.add.tilemap('map');
				map.addTilesetImage('terrain_tileset');
				map.setCollisionBetween(1, 12);
				layer = map.createLayer('Tile Layer 1');
				layer.resizeWorld();

				game.physics.startSystem(Phaser.Physics.ARCADE);

				// Stars
				stars = game.add.group();
				stars.enableBody = true;
				star = stars.create(game.world.width - 150, 128, 'star');
				star.body.gravity.y = 300;
				star.body.bounce.y = 0.3;

				// Player
				player = game.add.sprite(150, game.world.height - 150, 'ship');
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
				weapon = game.add.weapon(30, 'bullet');
				weapon.scale = 0.1;
				weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
				weapon.bulletSpeed = 500;
				weapon.fireRate = 300;

				weapon.trackSprite(player, 16, 0, true);
				console.log(weapon);


				// Keys
				cursors = game.input.keyboard.createCursorKeys();
				fireButton = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
				// Score
				scoreText = game.add.text(16, 16, '0', {fontSize: '32px', fill: '#000'});
				// Fullscreen
				game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
		}


		function update() {

			function collectStar (player, star){
				star.kill();
				powerUps++;
			}

			// Collision
			var hitPlatform = game.physics.arcade.collide(player, platforms);
			game.physics.arcade.collide(stars, layer);
			game.physics.arcade.collide(player, layer);
			game.physics.arcade.overlap(player, stars, collectStar, null, this);

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
				weapon.fire();
			}
		}

};
