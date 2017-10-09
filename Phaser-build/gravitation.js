window.onload = function() {

		var game = new Phaser.Game(window.innerwidth, window.innerheight, Phaser.AUTO, '', { preload: preload, create: create, update: update });

		function preload () {
				console.log('HELLO!');
				game.load.image('bg', 'assets/debug-grid-1920x1920.png');
				game.load.image('ground', 'assets/platform.png');
				// game.load.image('star', 'assets/star.png');
				game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
				// game.load.image('logo', 'phaser.png');
				game.load.image('ship', 'assets/triangle.png');
		}

		var platforms;
		var player;
		var stars;
		var score = 0;
		var scoreText;

		function create () {

				game.physics.startSystem(Phaser.Physics.ARCADE);
				game.add.sprite(0, 0, 'bg');
				game.world.setBounds(0, 0, 1920, 1920);
				// Floor and Ledges PLATFORMS.
				platforms = game.add.group();
				platforms.enableBody = true;
				var ground = platforms.create(0, game.world.height - 64, 'ground');
				ground.scale.setTo(2, 2);
				ground.body.immovable = true;
				// var ledge = platforms.create(400, 400, 'ground');
				// ledge.body.immovable = true;
				// ledge = platforms.create( -150, 250, 'ground');
				// ledge.body.immovable = true;

				// Stars
				// stars = game.add.group();
				// stars.enableBody = true;
				//
				// for (var i = 0; i < 12; i++){
				// 	var star = stars.create(i * 70, 0, 'star');
				// 	star.body.gravity.y = 500;
				// 	star.body.bounce.y = 0 + Math.random() * 0.2;
				// }

				// Player
				player = game.add.sprite(game.world.width/2, game.world.height - 150, 'ship');
				player.anchor.setTo(0.5, 0.5);
				game.physics.arcade.enable(player);
				console.log(player.body);

				// player.body.rotation = -90;
				player.body.drag.x = 200;
				player.body.drag.y = 100;
				player.body.maxVelocity.set(300);
				player.body.bounce.y = 0;
				player.body.gravity.y = 300;
				player.body.collideWorldBounds = true;

				game.camera.follow(player);
				// player.animations.add('left', [0, 1, 2, 3], 10, true);
				// player.animations.add('right', [5, 6, 7, 8], 10, true);
				// Keys
				cursors = game.input.keyboard.createCursorKeys();
				// Score
				scoreText = game.add.text(16, 16, '0', {fontSize: '32px', fill: '#000'});
		}


		function update() {
			// function collectStar (player, star){
			// 	star.kill();
			// 	player.body.velocity.y = -500;
			// 	score += 10;
			// 	scoreText.text = score;
			// }

			// cursors = game.input.keyboard.createCursorKeys();

			// Collision
			var hitPlatform = game.physics.arcade.collide(player, platforms);
			// game.physics.arcade.collide(stars, platforms);
			// game.physics.arcade.overlap(player, stars, collectStar, null, this);

			if (cursors.up.isDown){
				game.physics.arcade.accelerationFromRotation(player.rotation - Math.PI/2, 900, player.body.acceleration);
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

			// player.body.velocity.y = 0;
			// player.body.angularVelocity = 0;
			//
			// if (cursors.left.isDown){
			// 	player.body.angularVelocity = -300;
			//
			// } else if (cursors.right.isDown){
			// 	player.body.angularVelocity = 300;
			// }
			//
			// if (cursors.up.isDown){
			// 	game.physics.arcade.velocityFromAngle(player.angle - 90, 500, player.body.velocity);
			// }
		}

};
