// Cheston Chen
// Rocket Patrol Mod
// 4/17/2021
// Time to complete: 6-7 hours

// Add your own (copyright-free) background music to the Play scene (5) Credit: www.bensound.com
// Allow the player to control the Rocket after it's fired (5)
// Track a high score that persists across scenes and display it in the UI (5)
// Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)
// Sound effects by: www.fesliyanstudios.com



let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    backgroundColor: '#05b1e6',
    scene: [Menu, Play],
}

let game = new Phaser.Game(config);
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
let highScore= 0;