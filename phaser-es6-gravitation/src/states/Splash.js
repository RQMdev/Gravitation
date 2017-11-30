import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.game.time.advancedTiming = true;

    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    // load your assets
    this.load.tilemap('map', 'assets/maps/map1.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('terrain_tileset', 'assets/tilesets/terrain_tileset.png', 32, 32);
    this.load.image('desert', 'assets/tilesets/desert.png');
    this.load.image('mininicular', 'assets/tilesets/mininicular.png');
    this.load.image('bg', 'assets/sprites/debug-grid-1920x1920.png');
    this.load.image('starfield', 'assets/sprites/starfield.jpg');
    this.load.image('ground', 'assets/sprites/platform.png');
    this.load.image('star', 'assets/sprites/star.png');
    this.load.image('ship', 'assets/sprites/ship.png');
    this.load.image('bullet', 'assets/sprites/bullet.png');
    this.load.image('shield', 'assets/sprites/shield2.png');
    this.load.image('mushroom', 'assets/images/mushroom2.png')
  }

  create () {
    this.state.start('Game')
  }
}
