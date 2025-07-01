import MenuScene from "./scenes/MenuScene.js";
import HelloWorldScene from "./scenes/HelloWorldScene.js";
import SegundaEscena from "./scenes/segundaescena.js";
import TerceraEscena from "./scenes/tercerescena.js";


// Create a new Phaser config object
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
    max: {
      width: 1920,
      height: 1080,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: false,
    },
  },
  render:
  {
    pixelArt: true,
    antialias: false,
    roundPixels: true,
  },
  // List of scenes to load
  // Only the first scene will be shown
  // Remember to import the scene before adding it to the list
  scene: [ MenuScene, HelloWorldScene, SegundaEscena, TerceraEscena ]
};

// Create a new Phaser game instance
window.game = new Phaser.Game(config);