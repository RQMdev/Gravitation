import Phaser from 'phaser';

export default class Player extends Phaser.Sprite {
  constructor ({ game, x, y, asset, health }) {
    super(game, x, y, asset);
    this.game = game;

    this.anchor.setTo(0.5);

    this.health = health;
    this.maxHealth = health;

    this.game.physics.arcade.enable(this);
    this.rotation = - Math.PI/2;
    this.body.drag.x = 200;
    this.body.drag.y = 100;
    this.body.maxVelocity.set(300);
    this.body.bounce.y = 0;
    this.body.gravity.y = 300;
    this.body.collideWorldBounds = true;
  }

  update () {
    console.log('Player.js Update')
  }
}
