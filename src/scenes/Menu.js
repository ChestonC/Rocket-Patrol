class Menu extends Phaser.Scene {
  constructor() {
      super("menuScene");
  }
  preload() {
    // load audio
    this.load.audio('sfx_select', './assets/blip_select12.wav');
    this.load.audio('sfx_explosion', './assets/Cannonball-Splash.mp3');
    this.load.audio('sfx_rocket', './assets/pop-shot.mp3');
  }

  create() {
    let menuConfig = {
      fontFamily: 'cursive',
      fontSize: '28px',
      backgroundColor: '#2CF4FF',
      color: '#F1B60D',
      align: 'right',
      padding: {
      top: 5,
      bottom: 5,
      },
      fixedWidth: 0
  }
  // show menu text
  this.add.text(game.config.width/2, game.config.height/4 - borderUISize - borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
  this.add.text(game.config.width/2, game.config.height/3, 'Use ←→ arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
  menuConfig.backgroundColor = '#1380FF';
  menuConfig.color = '#F1B60D';
  this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);

  // define keys
  keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
  keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
      // easy mode
      game.settings = {
        spaceshipSpeed: 3,
        gameTimer: 60000   
      }
      this.sound.play('sfx_select');
      this.scene.start('playScene');  
    }
    if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
      // hard mode
      game.settings = {
        spaceshipSpeed: 4,
        gameTimer: 45000    
      }
      this.sound.play('sfx_select');
      this.scene.start('playScene');    
    }
  }
}