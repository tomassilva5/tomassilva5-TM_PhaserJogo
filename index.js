const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: '#1d1d1d',
    scene: [MainMenuScene, LevelMenuScene], // <-- adiciona Level3Scene
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 600 },
            debug: false
        }
    }
};

new Phaser.Game(config);
