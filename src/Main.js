// Add your own (copyright-free) background music to the Play scene (5) Credit: www.bensound.com
// Allow the player to control the Rocket after it's fired (5)
// Create a new scrolling tile sprite for the background (5)
// Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)
// Sound effects by: www.fesliyanstudios.com



let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;