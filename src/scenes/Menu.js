class Menu extends Phaser.Scene {
  constructor() {
      super("menuScene");
  }


  create() {
      this.add.text(20, 20, "Rocket Patrol Menu");
      this.scene.start("playScene");
      // define keys
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
  }

}